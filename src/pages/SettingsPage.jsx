import Layout from "../components/common/Layout";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Impostazioni</h1>
        <p className="text-gray-700">
          Qui potrai modificare le impostazioni del tuo account in futuro
        </p>
      </div>
    </Layout>
  );
};

export default SettingsPage;
