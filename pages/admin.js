// import CMS from 'netlify-cms';
import Head from 'next/head';

const Admin = () => (
  <div>
    <Head>
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js" />
    </Head>
    <h1>Admin page</h1>
  </div>
);

export default Admin;

// CMS.registerPreviewTemplate('my-template', Admin);
