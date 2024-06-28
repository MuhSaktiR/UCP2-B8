// Data for products
const products = {
    product1: {
        img: 'Gambar/galaxsi.jpg',
        description: 'Galaksi Bima Sakti adalah galaksi spiral tempat tata surya kita berada. Ini adalah salah satu dari miliaran galaksi di alam semesta dan merupakan rumah bagi ratusan miliar bintang, termasuk Matahari kita..'
    },
    product2: {
        img: 'Gambar/nebula.jpg',
        description: 'Nebula adalah awan antarbintang yang terdiri dari debu, gas, dan plasma. Nebula memiliki bentuk dan ukuran yang beragam serta sering kali terlihat indah dalam gambar teleskop. Contoh-contoh terkenal dari nebula termasuk Nebula Orion, Nebula Heliks, dan Nebula Tarantula. Nebula-nebula ini sering kali menjadi subjek penelitian astrofisika karena mereka membantu kita memahami proses pembentukan bintang dan evolusi galaksi.'
    },
    product3: {
        img: 'Gambar/blackhole.jpg',
        description: 'Yang tak banyak diketahui, lubang hitam atau black hole sebenarnya juga telah dijelaskan di dalam Al Quran. Lubang hitam adalah daerah di ruang-waktu di mana medan gravitasi sangat kuat. Sehingga, tidak ada apapun, termasuk cahaya, yang bisa lolos dari gravitasi lubang hitam.'
    },
    product4: {
        img: 'Gambar/asteroid.jpg',
        description: 'Asteroid adalah objek berbatu kecil yang mengorbit Matahari dan merupakan sisa-sisa dari pembentukan tata surya. Mereka bervariasi dalam ukuran, dari beberapa meter hingga ratusan kilometer, dan biasanya memiliki bentuk yang tidak teratur. Sebagian besar asteroid berada di Sabuk Asteroid Utama antara Mars dan Jupiter, tetapi ada juga yang mendekati orbit Bumi..'
    },
    product5: {
        img: 'Gambar/Bintang.jpg',
        description: 'Bintang merupakan benda langit yang memancarkan cahaya yang disebabkan oleh reaksi fusi nuklir yang menghasilkan energi yang terjadi di intinya. Perlu diperhatikan bahwa bintang semu bukanlah bintang, tetapi planet yang memantulkan cahaya dari bintang lain dan terlihat bercahaya di langit seperti sebuah bintang'
    },
    product6: {
        img: 'Gambar/satelit.jpg',
        description: 'Satelit adalah objek yang mengorbit benda lain di luar angkasa. Terdapat dua jenis utama satelit: satelit alami dan satelit buatan. Satelit buatan adalah objek yang dibuat dan diluncurkan oleh manusia ke orbit di sekitar Bumi atau benda langit lainnya. Fungsi utama dari satelit buatan bervariasi, dan mereka digunakan untuk berbagai tujuan, termasuk komunikasi, navigasi, observasi cuaca, pengamatan Bumi, dan penelitian ilmiah.'
    }
};

function openModal(product) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = products[product].img;
    modalDescription.innerText = products[product].description;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
