import Head from "next/head";
import Link from "next/link";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Privacy Policy - Jachao</title>
        <meta name="description" content="Jachao Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy – Jachao
          </h1>
          <p className="text-gray-600 mb-8">Effective Date: January 17, 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Jachao ("we," "our," or "us") values your trust and is committed
              to protecting your personal information. This Privacy Policy
              explains how we collect, use, store, and safeguard your data when
              you use our mobile application ("App"). By using Jachao, you agree
              to the terms outlined in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you use Jachao, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Personal Information:</strong> Name, email address,
                gender, date of birth, and related profile details.
              </li>
              <li className="mb-2">
                <strong>Health Information:</strong> Menstrual cycle details,
                symptoms, reproductive health-related data, weight, chronic
                illness information you choose to provide (such as thyroid,
                diabetes, asthma, or others), and other wellness information you
                voluntarily share.
              </li>
              <li className="mb-2">
                <strong>App Usage Data:</strong> Interactions with the app,
                preferences, and in-app activities.
              </li>
              <li className="mb-2">
                <strong>Device Information:</strong> Device type, operating
                system, unique device identifiers, and crash/usage logs.
              </li>
              <li className="mb-2">
                <strong>Camera Access:</strong> If you choose to capture a photo
                of your medical report through the app, Jachao will request
                access to your device's camera. These photos are used only for
                generating your lab report analysis and are stored securely with
                your account. Jachao does not access your camera in the
                background; it is only used when you actively choose to capture
                a photo.
              </li>
              <li className="mb-2">
                <strong>Mental Health Assessment Responses:</strong> When you
                voluntarily use our mental health self-assessment tools, we
                temporarily process your responses to generate your assessment
                results.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the collected information for purposes such as:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                To provide core features of the Jachao app, including health
                tracking and personalized insights.
              </li>

              <li className="mb-2">
                To personalize health insights, predictions, and recommendations
                based on your weight and any chronic illness information you
                provide.
              </li>

              <li className="mb-2">
                To improve app functionality, performance, and user experience.
              </li>
              <li className="mb-2">
                To communicate with you regarding updates, support, or important
                changes.
              </li>
              <li className="mb-2">
                To ensure data security and prevent fraudulent or unauthorized
                use.
              </li>
              <li className="mb-2">
                To comply with applicable legal, regulatory, or health-related
                requirements.
              </li>
              <li className="mb-2">
                To provide mental health self-assessment tools and generate your
                assessment results.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              3. Data Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We respect your privacy. Your information is not sold or rented to
              third parties. We may share data only in the following cases:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>With Service Providers:</strong> Trusted vendors who
                support app functionality (e.g., hosting, analytics).
              </li>
              <li className="mb-2">
                <strong>For Legal Reasons:</strong> If required by law,
                regulation, or legal process.
              </li>
              <li className="mb-2">
                <strong>For Safety:</strong> To protect the rights, security, or
                integrity of our users, the public, or Jachao.
              </li>
            </ul>
            <p className="mb-6">
              We currently do not use third-party analytics or crash reporting
              tools that collect additional user data. We use Clerk solely for
              secure authentication and account management. No additional
              personal data is shared with Clerk beyond what is necessary for
              sign-in.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              4. Data Storage and Security
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                All personal and health data is stored securely and is
                accessible only to authorized personnel.
              </li>
              <li className="mb-2">
                We implement industry-standard technical and organizational
                measures to protect data against unauthorized access, loss, or
                misuse.
              </li>
              <li className="mb-2">
                While we strive to safeguard your information, no method of
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </li>
              <li className="mb-2">
                Weight data and chronic illness details are treated as sensitive
                health information and are protected using industry-standard
                security measures.
              </li>
              <li className="mb-2">
                <strong>Medical Report Storage:</strong> Any lab report photos
                you upload are stored securely in our cloud storage provider and
                linked to your profile. These reports are accessible only to you
                within the app and are not shared with third parties. You can
                delete your uploaded reports and their AI-generated analysis at
                any time using the delete option in the app. Once deleted, they
                are permanently removed from our servers and cannot be
                recovered. We do not use your uploaded medical reports or
                analysis results for advertising, profiling, or training AI
                models outside of providing you with your requested analysis.
              </li>
              <li className="mb-2">
                <strong>Mental Health Assessments:</strong> Mental health
                assessment responses are processed locally on your device and
                are not stored on our servers. Your responses exist only
                temporarily during your assessment session and are automatically
                cleared when you exit the assessment.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              5. User Rights
            </h2>
            <p className="mb-4">As a user, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Access & Update:</strong> You may access, review, or
                update your information through the app.
              </li>
              <li className="mb-2">
                <strong>Withdraw Consent:</strong> You may withdraw your consent
                to data processing by discontinuing app use.
              </li>
              <li className="mb-2">
                <strong>Account & Data Deletion:</strong> You may request
                deletion of your account and all associated data at any time.
                See Section 6 below.
              </li>
              <li className="mb-2">
                <strong>Delete Specific Data:</strong> You may delete your
                uploaded medical report photos and their associated analysis
                directly from the app using the delete option provided in the
                medical report section. Once deleted, this data is permanently
                removed from our database and cannot be recovered.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              6. Account and Data Deletion
            </h2>
            <p className="mb-4">
              We provide users with the ability to delete their account and
              data:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>In-App:</strong> A dedicated account deletion option
                will be introduced in a future update.
              </li>
              <li className="mb-2">
                <strong>Current Method:</strong> Until then, you may request
                account and data deletion by filling out the account deletion
                form.
              </li>
            </ul>
            <p className="mb-6">
              Upon verification, your account and data will be permanently
              deleted within 7 business days, unless retention is required by
              law or for security/fraud prevention.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              7. Children's Privacy
            </h2>
            <p className="mb-6">
              Jachao is not intended for users under the age of 16. We do not
              knowingly collect personal or health data from children under 16.
              If we discover that such data has been collected, we will take
              immediate steps to delete it.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              8. International Data Processing
            </h2>
            <p className="mb-6">
              If you are accessing Jachao outside Nepal, please note that your
              data may be processed and stored in countries where data
              protection laws may differ from your country. We ensure that your
              data receives an adequate level of protection in line with
              applicable regulations.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              9. AI-Generated Health Insights Disclaimer
            </h2>
            <p className="mb-6">
              The information, suggestions, and recommendations provided by
              Jachao — including AI-generated analysis, diet plans, and symptom
              suggestions — are for informational and educational purposes only.
              They are not a substitute for professional medical advice,
              diagnosis, or treatment. Always consult a qualified healthcare
              provider for concerns about your health.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              10. Mental Health Assessments Disclaimer
            </h2>
            <p className="mb-6">
              Our mental health self-assessment tools are for informational
              purposes only and are not a substitute for professional medical
              advice, diagnosis, or treatment. Assessment results are generated
              based on your self-reported responses and should not be considered
              diagnostic. Please consult a qualified healthcare professional for
              any mental health concerns.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Any
              significant changes will be communicated through the app or via
              email, and the "Effective Date" will be updated accordingly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
              12. Contact Us
            </h2>
            <p className="mb-2">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mb-1">
              <strong>Jachao</strong>
            </p>
            <p className="mb-1">Developers: Aayush Bhandari & Anjil Timsina</p>
            <p className="mb-1">📍 Lalitpur, Nepal</p>
            <p className="mb-4">📧 Email: jachaoofficial@gmail.com</p>

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

export default PrivacyPolicy;
