// app/career/page.js

export default function Career() {
    return (
      <div className="container mx-auto p-4 w-4/5 h-auto" >
        <h1 className="text-3xl font-bold">Career Opportunities</h1>
        <p className="mt-4 text-xl">
          Join our team and make a difference in the lives of adults in need. Below are some current job openings:
        </p>
  
        <div className="mt-6">
          <div className="mb-4 p-4 border rounded-md">
            <h2 className="text-2xl font-semibold">Adult Caregiver</h2>
            <p className="mt-2">Location: Tokyo, Japan</p>
            <p className="mt-2">Responsibilities: Provide daily care and assistance to adults in need. Must be compassionate and patient.</p>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 underline"
            >
              Apply Now
            </a>
          </div>
  
          <div className="mb-4 p-4 border rounded-md">
            <h2 className="text-2xl font-semibold">Health Support Specialist</h2>
            <p className="mt-2">Location: Tokyo, Japan</p>
            <p className="mt-2">Responsibilities: Assist with health-related tasks and ensure proper care for adults.</p>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 underline"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    );
  }
  