import React, { useState } from 'react';
import { 
  Mic2, 
  Music, 
  BookOpen, 
  PlayCircle, 
  CheckCircle2, 
  Home, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  Wind,
  UserCheck,
  Speech
} from 'lucide-react';

const materiData = [
  {
    title: "Apa itu Bernyanyi Solo?",
    icon: <Mic2 className="w-12 h-12 text-purple-500 mb-4" />,
    content: "Bernyanyi solo adalah kegiatan bernyanyi yang dilakukan oleh satu orang (tunggal) dengan atau tanpa iringan alat musik. Dalam bernyanyi solo, seorang penyanyi memegang kendali penuh atas lagu yang dibawakan, sehingga ia harus menguasai teknik vokal dengan baik agar penampilan menjadi maksimal.",
    tips: "Penyanyi solo harus memiliki rasa percaya diri yang tinggi!"
  },
  {
    title: "Sikap Badan",
    icon: <UserCheck className="w-12 h-12 text-blue-500 mb-4" />,
    content: "Sikap badan sangat mempengaruhi produksi suara saat menyanyi. Sikap yang benar adalah:\n\n1. Berdiri tegak, namun tetap rileks (tidak kaku).\n2. Posisi dada agak dibusungkan agar rongga dada terbuka.\n3. Posisi kedua kaki terbuka selebar bahu, dengan salah satu kaki sedikit lebih maju untuk menjaga keseimbangan.\n4. Pandangan mata lurus ke depan.",
    tips: "Cobalah menyanyi sambil duduk membungkuk, lalu bandingkan saat kamu berdiri tegak. Pasti suaranya berbeda!"
  },
  {
    title: "Teknik Pernapasan",
    icon: <Wind className="w-12 h-12 text-teal-500 mb-4" />,
    content: "Ada 3 jenis pernapasan dalam menyanyi:\n\n1. Pernapasan Dada: Udara mengisi dada bagian atas. Napas menjadi pendek dan cepat lelah.\n2. Pernapasan Perut: Udara mengisi perut. Kurang kuat untuk menahan napas panjang.\n3. Pernapasan Diafragma: Udara mengisi rongga antara dada dan perut. Ini adalah pernapasan PALING BAIK untuk menyanyi karena dapat menghasilkan napas panjang, kuat, dan stabil.",
    tips: "Latih pernapasan diafragma dengan cara berbaring terlentang, letakkan buku di atas perut, lalu bernapaslah. Jika buku naik turun, pernapasanmu sudah benar!"
  },
  {
    title: "Teknik Vokal Dasar",
    icon: <Speech className="w-12 h-12 text-pink-500 mb-4" />,
    content: "Beberapa istilah penting dalam teknik vokal:\n\n• Artikulasi: Cara pengucapan kata demi kata yang baik dan jelas.\n• Intonasi: Ketepatan membidik nada (pitch). Suara tidak boleh fals (sumbang).\n• Phrasering: Aturan pemenggalan kalimat musik yang baik dan benar, sehingga mudah dimengerti sesuai pesan lagu.\n• Resonansi: Usaha untuk memperindah suara dengan memfungsikan rongga-rongga udara (dada, hidung, kepala) untuk ikut bergetar.",
    tips: "Latih artikulasi dengan mengucapkan A - I - U - E - O dengan mulut terbuka lebar di depan cermin."
  }
];

const quizData = [
  {
    question: "Jenis pernapasan yang paling ideal digunakan untuk bernyanyi adalah...",
    options: ["Pernapasan Dada", "Pernapasan Perut", "Pernapasan Hidung", "Pernapasan Diafragma"],
    answer: 3
  },
  {
    question: "Ketepatan seorang penyanyi dalam membidik nada disebut...",
    options: ["Artikulasi", "Intonasi", "Phrasering", "Resonansi"],
    answer: 1
  },
  {
    question: "Aturan pemenggalan kalimat yang baik dan benar sehingga mudah dimengerti sesuai dengan pesan lagu disebut...",
    options: ["Artikulasi", "Intonasi", "Phrasering", "Vibrato"],
    answer: 2
  },
  {
    question: "Berikut ini adalah sikap badan yang BENAR saat bernyanyi, KECUALI...",
    options: ["Berdiri tegak", "Badan kaku dan tegang", "Kaki dibuka selebar bahu", "Pandangan lurus ke depan"],
    answer: 1
  },
  {
    question: "Pengucapan kata demi kata yang jelas saat bernyanyi disebut teknik...",
    options: ["Resonansi", "Phrasering", "Artikulasi", "Pernapasan"],
    answer: 2
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // home, materi, kuis, hasil
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const resetApp = () => {
    setCurrentView('home');
    setCurrentSlide(0);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === quizData[currentQuestion].answer) {
      setScore(score + 100 / quizData.length);
    }
    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentView('hasil');
    }
  };

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-6 rounded-full shadow-xl">
        <Music className="w-24 h-24 text-purple-600" />
      </div>
      <div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Mari Bernyanyi Solo!</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Media Pembelajaran Seni Budaya <br/> SMP Kelas VII Semester 1
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <button 
          onClick={() => setCurrentView('materi')}
          className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <BookOpen className="w-5 h-5" />
          Mulai Belajar
        </button>
        <button 
          onClick={() => setCurrentView('kuis')}
          className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <PlayCircle className="w-5 h-5" />
          Mulai Kuis
        </button>
      </div>
    </div>
  );

  const renderMateri = () => {
    const data = materiData[currentSlide];
    return (
      <div className="flex flex-col h-full animate-in fade-in duration-500">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-purple-100 text-purple-800 text-sm font-bold px-4 py-2 rounded-full">
            Materi {currentSlide + 1} dari {materiData.length}
          </span>
          <button onClick={resetApp} className="text-gray-500 hover:text-gray-800">
            <Home className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-6 border border-purple-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10"></div>
          
          <div className="flex flex-col items-center text-center mb-8">
            {data.icon}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{data.title}</h2>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-8">
            {data.content}
          </div>

          {data.tips && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-yellow-800 text-sm font-medium">
                💡 <span className="font-bold">Tips:</span> {data.tips}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button 
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentSlide === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            <ArrowLeft className="w-5 h-5" /> Sebelumnya
          </button>
          
          {currentSlide === materiData.length - 1 ? (
            <button 
              onClick={() => {setCurrentView('kuis'); setCurrentSlide(0);}}
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all"
            >
              Lanjut Kuis <PlayCircle className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={() => setCurrentSlide(Math.min(materiData.length - 1, currentSlide + 1))}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all"
            >
              Selanjutnya <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderKuis = () => {
    const data = quizData[currentQuestion];
    return (
      <div className="flex flex-col h-full animate-in fade-in duration-500">
        <div className="flex justify-between items-center mb-6">
          <div className="w-full bg-gray-200 rounded-full h-3 mr-4">
            <div 
              className="bg-pink-500 h-3 rounded-full transition-all duration-500" 
              style={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold text-gray-600 whitespace-nowrap">
            {currentQuestion + 1} / {quizData.length}
          </span>
          <button onClick={resetApp} className="ml-4 text-gray-500 hover:text-gray-800">
            <Home className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-pink-100 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
            {data.question}
          </h2>

          <div className="grid gap-4">
            {data.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left bg-gray-50 hover:bg-pink-50 border-2 border-gray-100 hover:border-pink-300 rounded-xl p-4 md:p-5 text-gray-700 font-medium transition-all group relative overflow-hidden"
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-pink-500 font-bold mr-4 group-hover:scale-110 transition-transform">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderHasil = () => {
    let message = "";
    if (score === 100) message = "Luar Biasa! Sempurna!";
    else if (score >= 80) message = "Bagus Sekali! Kamu memahaminya dengan baik.";
    else if (score >= 60) message = "Cukup Bagus, mari tingkatkan lagi!";
    else message = "Jangan menyerah, ayo pelajari lagi materinya!";

    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6 animate-in zoom-in-95 duration-500">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md border-4 border-purple-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100 to-transparent"></div>
          
          <Award className="w-24 h-24 text-yellow-400 mx-auto mb-6 relative z-10" />
          
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2 relative z-10">Kuis Selesai!</h2>
          <p className="text-gray-600 font-medium mb-8">{message}</p>
          
          <div className="bg-purple-50 rounded-2xl p-6 mb-8 border border-purple-100">
            <span className="block text-sm text-purple-600 font-bold uppercase tracking-wider mb-2">Nilai Kamu</span>
            <span className="text-6xl font-black text-purple-700">{Math.round(score)}</span>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => {setCurrentView('kuis'); setCurrentQuestion(0); setScore(0);}}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md"
            >
              Ulangi Kuis
            </button>
            <button 
              onClick={resetApp}
              className="w-full bg-white hover:bg-gray-50 text-purple-700 border-2 border-purple-200 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Kembali ke Menu Utama
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 text-gray-800 flex flex-col">
      {/* Top Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-b-[40px] -z-0"></div>
      
      <main className="flex-1 w-full max-w-3xl mx-auto p-4 md:p-6 z-10 mt-4 h-[90vh]">
        {/* Container for content */}
        <div className="h-full">
          {currentView === 'home' && renderHome()}
          {currentView === 'materi' && renderMateri()}
          {currentView === 'kuis' && renderKuis()}
          {currentView === 'hasil' && renderHasil()}
        </div>
      </main>
    </div>
  );
}