# Cal Phase Time

The Cal Phase Time project seeks to find the optimal way for Cal students to register for courses they wish to take in the upcoming semester. The project is meaningful to us since many students often have the question of which courses to enroll in during phase 1, which ones to enroll in during phase 2, and which ones are okay to leave until adjustment period. Our overarching goal is to find the optimal answer to these questions, based on the enrollment data from past semesters.

To achieve such a goal, we obtained the enrollment and waitlist data for more than 100 popular courses from previous semesters. From there, we carefully reviewed them and devised a estimator their "priority", or in other words, how important it is to register for a course early rather than late. Then, we find the phase arrangement that maximizes the probability for the student to enroll in all courses that they desire to enroll in. In addition, the current version of Cal Phase Time also allows the user to input how important each course is to them, so that the algorithm considers the weights when finding the best arrangement.

The frontend of Cal Phase Time is written in Javasript using the library React. The backend is written in Python, using Flask to communicate with the frontend.

Two of the hardest problems we encountered was 1.conceptually, finding an unbiased yet precise estimator to assign priority scores to each course in the query, so that the project achieves its purporse, and 2.practically, connecting the frontend and the backend so that the website works as desired, so that it's presented in a clean and easy-to-use manner. Our team was able to solve both problems during the Cal Hacks allotted time.

In summary, building Cal Phase Time was a fun experience for our team, especially when we solved the problems that stood in our way. We would like to thank Cal Hacks for providing this opportunity for us to work together to achieve something we all deem meaningful.
