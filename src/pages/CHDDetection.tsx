import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { FormField } from '../components/FormField';

export const CHDDetection = () => {
  const [formData, setFormData] = useState({
    male: '',
    age: '',
    education: '',
    currentSmoker: '',
    cigsPerDay: '',
    BPMeds: '',
    prevalentStroke: '',
    prevalentHyp: '',
    diabetes: '',
    totChol: '',
    sysBP: '',
    diaBP: '',
    BMI: '',
    heartRate: '',
    glucose: ''
  });

  const { predict, loading, error, result } = useApi('/predict/chd');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await predict(formData);
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Heart className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-4xl font-bold">CHD Risk Detection</h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Sex"
                type="select"
                id="male"
                value={formData.male}
                onChange={(e) => handleChange('male', e.target.value)}
                options={[
                  { value: '', label: 'Select' },
                  { value: '1', label: 'Male' },
                  { value: '0', label: 'Female' }
                ]}
              />

              <FormField
                label="Age"
                type="number"
                id="age"
                value={formData.age}
                onChange={(e) => handleChange('age', e.target.value)}
              />

              <FormField
                label="Education Level"
                type="select"
                id="education"
                value={formData.education}
                onChange={(e) => handleChange('education', e.target.value)}
                options={[
                  { value: '', label: 'Select' },
                  { value: '1', label: 'Some High School' },
                  { value: '2', label: 'High School/GED' },
                  { value: '3', label: 'Some College/Vocational School' },
                  { value: '4', label: 'College' }
                ]}
              />

              <FormField
                label="Current Smoker"
                type="select"
                id="currentSmoker"
                value={formData.currentSmoker}
                onChange={(e) => handleChange('currentSmoker', e.target.value)}
                options={[
                  { value: '', label: 'Select' },
                  { value: '1', label: 'Yes' },
                  { value: '0', label: 'No' }
                ]}
              />

              <FormField
                label="Cigarettes Per Day"
                type="number"
                id="cigsPerDay"
                value={formData.cigsPerDay}
                onChange={(e) => handleChange('cigsPerDay', e.target.value)}
              />

              <FormField
                label="Blood Pressure Medication"
                type="select"
                id="BPMeds"
                value={formData.BPMeds}
                onChange={(e) => handleChange('BPMeds', e.target.value)}
                options={[
                  { value: '', label: 'Select' },
                  { value: '1', label: 'Yes' },
                  { value: '0', label: 'No' }
                ]}
              />

              <FormField
                label="History of Stroke"
                type="select"
                id="prevalentStroke"
                value={formData.prevalentStroke}
                onChange={(e) => handleChange('prevalentStroke', e.target.value)}
                options={[
                  { value: '', label: 'Select' },
                  { value: '1', label: 'Yes' },
                  { value: '0', label: 'No' }
                ]}
              />

              <FormField
                label="History of Hypertension"
                type="select"
                id="prevalentHyp"
                value={formData.prevalentHyp}
                onChange={(e) => handleChange('prevalentHyp', e.target.value)}
                options={[
                  { value: '', label: 'Select' },
                  { value: '1', label: 'Yes' },
                  { value: '0', label: 'No' }
                ]}
              />

              <FormField
                label="Diabetes"
                type="select"
                id="diabetes"
                value={formData.diabetes}
                onChange={(e) => handleChange('diabetes', e.target.value)}
                options={[
                  { value: '', label: 'Select' },
                  { value: '1', label: 'Yes' },
                  { value: '0', label: 'No' }
                ]}
              />

              <FormField
                label="Total Cholesterol"
                type="number"
                id="totChol"
                value={formData.totChol}
                onChange={(e) => handleChange('totChol', e.target.value)}
              />

              <FormField
                label="Systolic Blood Pressure"
                type="number"
                id="sysBP"
                value={formData.sysBP}
                onChange={(e) => handleChange('sysBP', e.target.value)}
              />

              <FormField
                label="Diastolic Blood Pressure"
                type="number"
                id="diaBP"
                value={formData.diaBP}
                onChange={(e) => handleChange('diaBP', e.target.value)}
              />

              <FormField
                label="BMI"
                type="number"
                id="BMI"
                value={formData.BMI}
                onChange={(e) => handleChange('BMI', e.target.value)}
              />

              <FormField
                label="Heart Rate"
                type="number"
                id="heartRate"
                value={formData.heartRate}
                onChange={(e) => handleChange('heartRate', e.target.value)}
              />

              <FormField
                label="Glucose Level"
                type="number"
                id="glucose"
                value={formData.glucose}
                onChange={(e) => handleChange('glucose', e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              {loading ? 'Analyzing...' : 'Analyze Risk'}
            </button>

            {error && (
              <p className="mt-4 text-red-600 text-center">{error}</p>
            )}

            {result && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-xl font-semibold mb-2">Analysis Result</h3>
                <p className="text-gray-700">
                  Risk Level: <span className="font-bold">{result.prediction}</span>
                </p>
                {result.probability !== undefined && (
                  <p className="text-gray-700">
                    Probability: <span className="font-bold">{(result.probability * 100).toFixed(1)}%</span>
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}