const ShowResume = document.getElementById('Show Resume');
const ResumeDetails = document.getElementById('Resume Details');

ShowResume.addEventListener('click', function () {

    ResumeDetails.innerHTML = `
        <h1>My Resume</h1>

        <h2>Personal Details</h2>
        <p><strong>Name:</strong> Avani Goel</p>
        <p><strong>Email:</strong> avanigoel2006@gmail.com</p>
        <p><strong>Phone:</strong> 99xxxxxxxx</p>
        <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh</p>

        <h2>Education</h2>
        <p>B.Tech in Computer Science (AIML)</p>

        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
        </ul>

        <h2>Projects</h2>
        <p>Resume Builder Project</p>

        <h2>About Me</h2>
        <p>I am a student interested in web development and programming.</p>
    `;
});