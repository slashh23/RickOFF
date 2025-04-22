import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShoppingCart, ChevronRight, ChevronLeft, MapPin, Clock, Mail, Instagram, MessageCircle, Trophy } from 'lucide-react';

// Временные данные для слайдера
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1920&q=80",
    title: "Выгодно, быстро, качественно!",
    subtitle: "Шины и диски для вашего автомобиля"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
    title: "Профессиональный подбор",
    subtitle: "Индивидуальный подход к каждому клиенту"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=80",
    title: "Гарантия качества",
    subtitle: "Только проверенные производители"
  }
];

// Топ продаж
const topProducts = [
  {
    id: 1,
    name: "BLKRR Forged F-102",
    type: "Кованые диски",
    specs: "20\" 9.5J ET35",
    description: "Эксклюзивные кованые диски с полированной отделкой",
    price: 85000,
    image: "https://i.postimg.cc/XvvCNM3V/image.png"
  },
  {
    id: 2,
    name: "Umionis Cast U-55",
    type: "Литые диски",
    specs: "19\" 8.5J ET40",
    description: "Легкие литые диски с серебристой отделкой",
    price: 32000,
    image: "https://i.postimg.cc/1zyLfHYR/image.png"
  },
  {
    id: 3,
    name: "Draft F-330R",
    type: "Кованые диски",
    specs: "20\" 10J ET25",
    description: "Трехсоставные кованые диски премиум-класса",
    price: 95000,
    image: "https://i.postimg.cc/ZnDdyVLG/image.png"
  },
  {
    id: 4,
    name: "Continental IceContact 3",
    type: "Зимние шины",
    specs: "245/45 R19 102T XL",
    description: "Зимние шипованные шины для максимального сцепления",
    price: 28500,
    image: "https://i.postimg.cc/8cyhm1Tn/image.png"
  },
  {
    id: 5,
    name: "Michelin Pilot Sport 5",
    type: "Летние шины",
    specs: "255/40 R19 100Y XL",
    description: "Премиальные летние шины для спортивного вождения",
    price: 32000,
    image: "https://i.postimg.cc/HnjJHbCB/4.png"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const CallbackModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Заказать звонок</h3>
          <button onClick={() => setIsCallbackOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Имя</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Телефон</label>
            <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200" />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed w-full bg-black text-white z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">RickOFF Wheels</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#main" className="hover:text-red-500 transition-colors">Главная</a>
              <a href="#top-sales" className="hover:text-red-500 transition-colors">Топ продаж</a>
              <a href="#catalog" className="hover:text-red-500 transition-colors">Каталог</a>
              <a href="#contacts" className="hover:text-red-500 transition-colors">Контакты</a>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:+78467777777" className="hidden md:flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +7 (846) 77-77-77
              </a>
              <button
                onClick={() => setIsCallbackOpen(true)}
                className="hidden md:block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Заказать звонок
              </button>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <a href="#main" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Главная</a>
            <a href="#top-sales" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Топ продаж</a>
            <a href="#catalog" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Каталог</a>
            <a href="#contacts" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4">
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <section id="main" className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <a
                  href="#catalog"
                  className="bg-red-600 text-white px-8 py-3 rounded-md text-lg hover:bg-red-700 transition-colors"
                >
                  Перейти в каталог
                </a>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Top Sales Section */}
      <section id="top-sales" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Trophy className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-center">Топ продаж</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {topProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
                    {product.type}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.specs}</p>
                  <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{product.price.toLocaleString()} ₽</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-4" />
                <p>г. Самара, ул. Ленинская, д. 15/2, оф. 305</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-600 mr-4" />
                <a href="tel:+78467777777">+7 (846) 77-77-77</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-red-600 mr-4" />
                <a href="mailto:info@rickoff-wheels.ru">info@rickoff-wheels.ru</a>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-red-600 mr-4" />
                <p>ПН-ВС: 9:00–20:00</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Имя</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Сообщение</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RickOFF Wheels</h3>
              <p className="text-gray-400">© 2023 Колеса Рикоффа</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Юридическая информация</h4>
              <p className="text-gray-400">ИП Рыков Кирилл Владимирович</p>
              <p className="text-gray-400">ИНН: 1234567890</p>
              <p className="text-gray-400">ОГРН: 1234567890123</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400">+7 (846) 77-77-77</p>
              <p className="text-gray-400">info@rickoff-wheels.ru</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Callback Modal */}
      {isCallbackOpen && <CallbackModal />}
    </div>
  );
}

export default App;