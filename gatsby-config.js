module.exports = {
  siteMetadata: {
    title: 'iFast Home',
    description:'Decentralized Exchange of the World',
    keywords:'Block Chain,Decentralized Exchange Center '
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId:'k5n7q608ty9o',
        accessToken:'45a3577c50a44e425132f7e9a2570d9e1f6d54611a1358560379e8c53500f0f8'
      }
    }

  ],
}
