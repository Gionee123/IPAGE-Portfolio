import React, { useState } from "react";
import axios from "axios";

export default function ApiTest() {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const testEndpoints = async () => {
    setLoading(true);
    setTestResults([]);

    const endpoints = [
      {
        url: "https://ipage-api.onrender.com/api/frontend/users/view",
        method: "POST",
      },
      {
        url: "https://ipage-api.onrender.com/api/frontend/users/view",
        method: "GET",
      },
      { url: "https://ipage-api.onrender.com/api/users/view", method: "POST" },
      { url: "https://ipage-api.onrender.com/api/users/view", method: "GET" },
      { url: "https://ipage-api.onrender.com/api/users", method: "GET" },
      { url: "https://ipage-api.onrender.com/", method: "GET" },
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await axios({
          method: endpoint.method,
          url: endpoint.url,
          timeout: 5000,
        });

        setTestResults((prev) => [
          ...prev,
          {
            url: endpoint.url,
            method: endpoint.method,
            status: response.status,
            success: true,
            data: response.data,
          },
        ]);
      } catch (error) {
        setTestResults((prev) => [
          ...prev,
          {
            url: endpoint.url,
            method: endpoint.method,
            status: error.response?.status || "Network Error",
            success: false,
            error: error.message,
          },
        ]);
      }
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">API Endpoint Test</h2>

      <button
        onClick={testEndpoints}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test All Endpoints"}
      </button>

      <div className="mt-6 space-y-4">
        {testResults.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded border ${
              result.success
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-sm">
                  {result.method} {result.url}
                </span>
                <div className="text-sm mt-1">
                  Status:{" "}
                  <span
                    className={`font-bold ${
                      result.success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              </div>
              <div
                className={`px-2 py-1 rounded text-xs font-bold ${
                  result.success
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {result.success ? "SUCCESS" : "FAILED"}
              </div>
            </div>
            {result.success && result.data && (
              <div className="mt-2 text-xs bg-gray-100 p-2 rounded">
                <pre>{JSON.stringify(result.data, null, 2)}</pre>
              </div>
            )}
            {!result.success && (
              <div className="mt-2 text-xs text-red-600">
                Error: {result.error}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
