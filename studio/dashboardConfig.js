export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60313cb2c07348df26eb68a6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-m2dxqerf',
                  apiId: '4c4018dc-5867-4eec-84a9-72e2fe316005'
                },
                {
                  buildHookId: '60313cb202ba89c8f42f2823',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1cguxi5d',
                  apiId: '3692574c-faa7-4cf1-9992-7a804e4a66f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felp-hub/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1cguxi5d.netlify.app', category: 'apps'}
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
