import Head from "next/head";
import Link from "next/link";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Delete Account - Jachao</title>
        <meta
          name="description"
          content="Jachao Account Deletion Instructions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Delete Account – Jachao
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              You can delete your Jachao account and all associated data at any
              time. Deleting your account removes your profile information,
              health data, uploaded reports, and app preferences.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              How to Delete
            </h2>
            <p className="mb-4">
              Open the Jachao app → Go to Profile → Tap “Delete Account” →
              Confirm.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Data Retention
            </h2>
            <p className="mb-6">
              Some information (e.g., legal or security records) may be retained
              for a limited period as required by law, but no personal or health
              data is kept after deletion.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Support
            </h2>
            <p className="mb-6">
              For help deleting your account, contact us:{" "}
              <strong>jachaoofficial@gmail.com</strong>
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/"
                className="text-rose-600 hover:text-rose-700 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeleteAccount;
