import csv
import sys
from itertools import chain, combinations


def load_data():
    input_file = open('data.csv')
    reader = csv.reader(input_file)
    priority_dict = {}
    for row in reader:
        course_name = row[0].upper()
        unit = int(row[4])
        priority = float(row[10])
        priority_dict[course_name] = (priority, unit)
    return priority_dict


def knapsack(courses, capacity):
    # courses is a list of (course_number, priority, unit) tuples
    # returns: a list of (course_number, priority, unit) tuples, and the number of leftover units
    best_option = ()
    best_priority = 0
    best_units = 0
    for option in powerset(courses):
        total_priority = 0
        total_units = 0
        exceeded_capacity = False
        for course_name, priority, unit in option:
            total_units += unit
            if total_units > capacity:
                exceeded_capacity = True
                break
            total_priority += priority
        if exceeded_capacity:
            continue
        if total_priority > best_priority or (total_priority == best_priority and total_units > best_units):
            best_option = option
            best_priority = total_priority
            best_units = total_units

    return list(best_option), capacity - best_units


def powerset(iterable):
    # @source: https://stackoverflow.com/questions/1482308/how-to-get-all-subsets-of-a-set-powerset
    s = list(iterable)
    return chain.from_iterable(combinations(s, r) for r in range(len(s) + 1))


def take_query(query_courses):
    # input: query_courses is a list of (course_name, user_priority) tuples that the user wants to query
    # output: dict (keys = course_names, values = 'Phase 1'/'Phase 2'/'Adjustment Period')
    courses = []
    phase_dict = {}
    data_dict = load_data()

    # finds the average user_priority and (later) subtracts it from user_priorities to calibrate
    total_user_priority = 0
    for _, user_priority in query_courses:
        total_user_priority += user_priority
    average_user_priority = total_user_priority / len(query_courses)

    user_input_weight = 0.1  # hyperparameter

    for course_name, user_priority in query_courses:
        priority, unit = data_dict[course_name]
        courses.append((course_name, priority + (user_priority - average_user_priority) * user_input_weight, unit))
    p1_courses, p1_leftover = knapsack(courses, 13.5)

    for course in p1_courses:
        courses.remove(course)
        course_name = course[0]
        phase_dict[course_name] = 'Phase 1'
    p2_courses, _ = knapsack(courses, 4 + p1_leftover)

    for course in p2_courses:
        courses.remove(course)
        course_name = course[0]
        phase_dict[course_name] = 'Phase 2'

    for course in courses:
        course_name = course[0]
        phase_dict[course_name] = 'Adjustment Period'

    return phase_dict


def main():
    courses = []
    for course_name, user_priority in zip(sys.argv[1:][0::2], sys.argv[1:][1::2]):
        courses.append((course_name, int(user_priority)))
    print(take_query(courses))


if __name__ == '__main__':
    main()
