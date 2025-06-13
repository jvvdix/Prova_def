import Layout from "../components/common/Layout";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Profilo</h1>
        <p className="text-gray-700">
          Qui potrai vedere le impostazioni del tuo account in futuro
        </p>
      </div>
    </Layout>
  );
};

export default ProfilePage;
