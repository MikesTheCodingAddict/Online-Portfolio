/* This is my very first API file ever written. I am still learning at this stage in this development.
   This file is intended to retrieve my projects from my GitHub profile, and then showcase them onto
   my portfolio webpage. */

// Variables for Fetch API input.
const gitHubUsername = 'MikesTheCodingAddict';
const gitHubHandleURL = `https://api.github.com/users/${gitHubUsername}/repos?sort=updated&per_page=100`;

// Variables for the HTML DOM's projects elements.
let downtimePjsCard = document.getElementById('downtimeProjectsCard');
let schoolPjsCard = document.getElementById('schoolProjectsCard');
let portfolioPjCard = document.getElementById('portfolioProjectCard');

// Fetch function.
async function fetchRepos() {
   try {
      downtimePjsCard.innerHTML = '';
      schoolPjsCard.innerHTML = '';
      portfolioPjCard.innerHTML = '';
      const responseFromAPI = await fetch(gitHubHandleURL);

      if (!responseFromAPI.ok) throw new Error('Failed to retrieve repositories. Please try again later.');

      const repos = await responseFromAPI.json();
      const downtimeProjectsFilter = repos.filter(repo =>
         repo.topics.includes('freetime-projects')
      );
      const schoolProjectsFilter = repos.filter(repo =>
         repo.topics.includes('school-projects')
      );
      const portfolioFilter = repos.filter(repo =>
         repo.topics.includes('portfolio-website')
      );
      
      // This is a test line of code to see if this function is working correctly.
      // console.log(repos);
      displayRepos(downtimePjsCard, downtimeProjectsFilter);
      displayRepos(schoolPjsCard, schoolProjectsFilter);
      displayRepos(portfolioPjCard, portfolioFilter);
   } catch(error) {
      console.error('Error: ', error);
      downtimePjsCard.innerHTML = '<p>Failed to load repositories. Please try again later.</p>';
      schoolPjsCard.innerHTML = '<p>Failed to load repositories. Please try again later.</p>';
   }
}

// Function to display the retrieved GitHub repositories.
function displayRepos(card, repos) {
   let htmlContent = '';
   repos.forEach(repo =>
      htmlContent += `
      <article class="repositoryCard">
         <div class='imageWrapper'>
            <img src='./images/apiImages/Six_Bricks_Model.jpg' class='codingProjectImage'>
         </div>
         <h3 class="qpHeaderWrapper questionAndParagraph-header">${repo.name}</h3>
         <p class="paragraph-box">${repo.description || "No available description."}</p>
         <button onclick='window.open("${repo.html_url}", "_blank")'>View Project on GitHub</button>
      </article>
      `
   );
   card.innerHTML = htmlContent;
}

// Calling the function(s).
fetchRepos();