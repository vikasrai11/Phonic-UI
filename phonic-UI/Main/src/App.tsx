import React, { useState } from 'react';
import { Bot, Upload, AudioWaveform as Waveform, Sparkles, Loader2 } from 'lucide-react';

function App() {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    console.log('Submitted:', { name, file });
  };

  return (
    <div className="min-h-screen relative">
      {/* Spline Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <iframe 
          src="https://my.spline.design/soundwave-d54e834888426741ef09594f3825f6d5/" 
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Bot className="w-10 h-10 text-purple-400" />
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  PhonicForge
                </h1>
              </div>
              <p className="text-gray-300 max-w-2xl">
                Advanced speech analysis powered by artificial intelligence and blockchain technology
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all backdrop-blur-sm text-white"
                    placeholder="Enter your name"
                    required
                    disabled={isAnalyzing}
                  />
                </div>

                {/* File Upload */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-gray-300">Upload Audio</label>
                  <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all backdrop-blur-sm bg-gray-800/30">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="audio/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                      disabled={isAnalyzing}
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <Upload className="w-8 h-8 text-gray-400" />
                      <p className="text-sm text-gray-400">
                        {file ? file.name : 'Drop your audio file here or click to browse'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isAnalyzing}
                className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 group backdrop-blur-sm
                  ${isAnalyzing ? 'opacity-90' : 'hover:from-purple-700 hover:to-pink-700'}`}
              >
                <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Speech'}</span>
                {isAnalyzing ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                )}
              </button>
            </form>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-12">
              <div className="p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <Waveform className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="font-medium mb-2 text-white">AI-Powered Analysis</h3>
                <p className="text-sm text-gray-300">Advanced neural networks for precise detection</p>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <Bot className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="font-medium mb-2 text-white">Real-time Processing</h3>
                <p className="text-sm text-gray-300">Instant feedback on speech patterns</p>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <Sparkles className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="font-medium mb-2 text-white">Blockchain Secured</h3>
                <p className="text-sm text-gray-300">Your data is encrypted and secure</p>
              </div>
            </div>

            {/* Bottom Spline Design */}
            <div className="w-full h-[200px] mt-12">
              <iframe 
                src="https://my.spline.design/blockchain-bdaec85170f0b268ccb607d0d926302d/"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;