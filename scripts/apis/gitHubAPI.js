/* This is my very first API file ever written. I am still learning at this stage in this development.
   This file is intended to retrieve my projects from my GitHub profile, and then showcase them onto
   my portfolio webpage.
   Author: Michael Cortez
   Filename: gitHubAPI.js
   Last updated: Oct. 31, 2026 */

// Variables for Fetch API input.
const gitHubUsername = 'MikesTheCodingAddict';
const gitHubHandleURL = `https://api.github.com/users/${gitHubUsername}/repos?sort=updated&per_page=100`;

// Variables for the HTML DOM's projects elements.
let bestPjCard = document.getElementById('bestProjectCard');
let freetimePjsCard = document.getElementById('freetimeProjectCard');
let schoolPjsCard = document.getElementById('schoolProjectCard');
let portfolioPjCard = document.getElementById('portfolioProjectCard');

// Fetch function.
async function fetchRepos() {
   try {
      bestPjCard.innerHTML = '';
      freetimePjsCard.innerHTML = '';
      schoolPjsCard.innerHTML = '';
      portfolioPjCard.innerHTML = '';
      const responseFromAPI = await fetch(gitHubHandleURL);

      // One-lined exception handling.
      if (!responseFromAPI.ok) throw new Error('Failed to retrieve repositories. Please try again later.');

      // Converting the API response, which is an array-like object, into JSON format for easier data manipulation.
      const repos = await responseFromAPI.json();
      
      const bestProjectsFilter = repos.filter(repo =>
         repo.topics.includes('top-project')
      );
      const freetimeProjectsFilter = repos.filter(repo =>
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
      displayRepos(bestPjCard, bestProjectsFilter);
      displayRepos(freetimePjsCard, freetimeProjectsFilter);
      displayRepos(schoolPjsCard, schoolProjectsFilter);
      displayRepos(portfolioPjCard, portfolioFilter);
   } catch(error) {
      console.error('Error: ', error);
      bestPjCard.innerHTML = '<p>Failed to load repository. Please try again later.</p>';
      freetimePjsCard.innerHTML = '<p>Failed to load repository. Please try again later.</p>';
      schoolPjsCard.innerHTML = '<p>Failed to load repository. Please try again later.</p>';
      portfolioPjCard.innerHTML = '<p>failed to load repository. Please try again later.</p>';
   }
}

// Function to display the retrieved GitHub repositories.
function displayRepos(card, repos) {
   let htmlContent = '';
   repos.forEach(repo => {
      const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US');
      htmlContent += `
      <article class="repositoryCard">
         <div class="imageWrapper">
            <img src="./images/apiImages/Six_Bricks_Model.jpg" alt="Image representing a GitHub repository." class="codingProjectImage">
         </div>
         <h3 class="qpHeaderWrapper questionAndParagraph-header">${repo.name}</h3>
         <span style="font-size: 1.5rem;">Last updated: ${formattedDate}</span>
         <p class="paragraph-box" style="background: none;">${repo.description || "No available description."}</p>
         <a href="${repo.html_url}" class="button" role="button">View Project on GitHub</a>
      </article>
      `
   });
   card.innerHTML = htmlContent;
}

// Calling the function(s).
fetchRepos();