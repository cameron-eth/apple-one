import React, { useState } from "react";

export default function Host() {
  const [hostInfo, setHostInfo] = useState({
    companyName: "",
    expectedOccupancy: "",
    eventType: "",
    budget: "",
    ownershipType: "",
    considerations: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHostInfo({
      ...hostInfo,
      [name]: value,
    });
  };

  return (
    <div className="bg-black">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">Looking to host an event ?</h2>
          <p className="mt-4 text-gray-500">
          You can also archive past events or keep track of essential tasks, making event planning and management a breeze
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-400">Company Name</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <input
                  type="text"
                  name="companyName"
                  value={hostInfo.companyName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-400">Expected Occupancy</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <select
                  name="expectedOccupancy"
                  value={hostInfo.expectedOccupancy}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value=""></option>
                  <option value="Low">1-25</option>
                  <option value="Medium">25-50</option>
                  <option value="Medium">50-75</option>
                  <option value="High">100+</option>
                </select>
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-400">Event Type</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <select
                  name="eventType"
                  value={hostInfo.eventType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value=""></option>
                  <option value="Conference">Concert</option>
                  <option value="Seminar">Live Performance</option>
                  <option value="Dinning">Dinning</option>
                  <option value="Workshop">Workshop</option>

                </select>
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-400">Budget</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <select
                  name="budget"
                  value={hostInfo.budget}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Anything is fine</option>
                  <option value="Low">5-10k</option>
                  <option value="Medium">20-35k</option>
                  <option value="High">50k +</option>
                </select>
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-400">Ownership Type</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <select
                  name="ownershipType"
                  value={hostInfo.ownershipType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select...</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                </select>
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-400">Considerations</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <input
                  type="text"
                  name="considerations"
                  value={hostInfo.considerations}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </dd>
            </div>
            {/* Add more input sections for other technical specifications if needed */}
          </dl>
        </div>

      </div>
    </div>
  );
}
