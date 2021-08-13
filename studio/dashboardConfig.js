export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6116560f143d290093ad6159',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h728fian',
                  apiId: 'b12d51dc-fd51-408f-8041-b7b1a1838f17'
                },
                {
                  buildHookId: '611656107c27310d0b750b2e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p2mzyb7j',
                  apiId: 'dd47e028-a8e0-40aa-8981-8fcadd9f65e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vosaul/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p2mzyb7j.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
