export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fe6930e605fe1c777a29bbd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x5dc6m35',
                  apiId: '42514d05-ada0-4b9f-b0da-26d6945d1228'
                },
                {
                  buildHookId: '5fe6930f823575c09a6a4152',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pmc9xof7',
                  apiId: '2a395dcd-fda2-4157-a7b3-63b8033001d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kashoncode/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pmc9xof7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
