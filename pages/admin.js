import Head from 'next/head';
import dynamic from 'next/dynamic';

const CMS = dynamic(import('netlify-cms'), {
  ssr: false,
});

const Admin = () => (
  <div>
    <h1>Admin page</h1>
    <CMS />
  </div>
);

export default Admin;

// CMS.registerPreviewTemplate('my-template', Admin);
