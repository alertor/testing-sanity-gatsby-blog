export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cee6277e3616bf5d4b1b60a',
                  title: 'Sanity Studio',
                  name: 'testing-sanity-gatsby-blog-studio',
                  apiId: '38cfc42d-64ee-4a6b-9dc2-a8a1fd2a1c7b'
                },
                {
                  buildHookId: '5cee6277a478c0a2c3f1f4cb',
                  title: 'Blog Website',
                  name: 'testing-sanity-gatsby-blog',
                  apiId: 'f6fe5f10-c4c6-48e2-866f-ffed13dd8f9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/st85/testing-sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://testing-sanity-gatsby-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
