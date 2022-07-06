const products = [
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      href: '#',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      href: '#',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      href: '#',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      href: '#',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      href: '#',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      href: '#',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
    {
      id: 1,
      name: 'PC ARMADA MX7 Amd Ryzen 5 3600-16Gb-GTX1650',
      href: '#',
      imageSrc: 'https://assets.spartangeek.com/cc/computadora-armada-para-edicion-de-video.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$135.000',
      desc: 'Motherboard AM4 • Asus Prime A320M-K • Procesador Amd Ryzen 5 3600 4.2 Ghz AM4 • Memoria Ram DDR4-8Gb 2666 Mhz Crucial',
    },
  ]
  
  export function Items() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">PC Gamers</h2> */}
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative border rounded shadow-xl">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between text-center p-2">
                  <div>
                    <h3 className="text-xl text-gray-800 font-bold">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="my-10 text-1xl text-gray-500">{product.desc}</p>
                  </div>
                </div>
                <div className="flex justify-center mb-10">
                  <button className="bg-green-700 rounded px-10 py-1 text-white">Agregar al carrito</button>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-medium text-gray-900">{product.price}</p>
                  <span className="text-md">Precio Especial &#128712;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  