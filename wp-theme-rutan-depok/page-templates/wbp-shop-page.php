<?php
/**
 * Template Name: WBP Shop Page
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden text-white selection:bg-gold-500 selection:text-dark-deep">
    <!-- Background Atmosphere -->
    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] animate-blob"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
    </div>

    <div class="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <!-- Header Section -->
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md text-gold-500 text-sm font-bold uppercase tracking-widest mb-6">
                <i class="fa-solid fa-shopping-bag"></i> Karya WBP Store
            </div>
            <h1 class="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-6 drop-shadow-2xl">
                E-Katalog Produk Unggulan
            </h1>
            <p class="text-slate-400 text-lg leading-relaxed">
                Dukung kemandirian Warga Binaan Pemasyarakatan dengan membeli produk-produk berkualitas hasil karya tangan mereka.
            </p>
        </div>

        <!-- Search & Filter Bar -->
        <div class="max-w-6xl mx-auto bg-navy-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-4 md:p-6 border border-white/10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="100">
            <div class="relative w-full md:w-80 group">
                <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors"></i>
                <input
                    type="text"
                    id="product-search"
                    placeholder="Cari produk..."
                    class="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500/50 transition-all font-medium"
                >
            </div>
            <div class="flex flex-wrap justify-center gap-2" id="category-filters">
                <?php
                $categories = array('Semua', 'Kerajinan', 'Fashion', 'Seni Lukis', 'Kuliner', 'Meubel', 'Souvenir');
                foreach ($categories as $cat) :
                ?>
                    <button
                        class="category-btn px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border <?php echo $cat === 'Semua' ? 'bg-gradient-gold text-primary border-transparent' : 'bg-white/5 text-slate-400 border-white/5 hover:border-gold-500/30 hover:text-white'; ?>"
                        data-category="<?php echo $cat; ?>"
                    >
                        <?php echo $cat; ?>
                    </button>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">
            <?php
            $products = array(
                array(
                    "id" => 1,
                    "name" => "Miniatur Kapal Pinisi",
                    "category" => "Kerajinan",
                    "price" => "Rp 250.000",
                    "image" => "https://images.unsplash.com/photo-1544474320-754d9299440e?q=80&w=800",
                    "desc" => "Miniatur kapal pinisi buatan tangan WBP Rutan Depok dengan detail tinggi menggunakan material kayu berkualitas."
                ),
                array(
                    "id" => 2,
                    "name" => "Tas Anyaman Pandan",
                    "category" => "Fashion",
                    "price" => "Rp 120.000",
                    "image" => "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
                    "desc" => "Tas anyaman elegan dari serat alam, ramah lingkungan dan modis."
                ),
                array(
                    "id" => 3,
                    "name" => "Lukisan Kanvas Lanskap",
                    "category" => "Seni Lukis",
                    "price" => "Rp 450.000",
                    "image" => "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
                    "desc" => "Karya seni lukis ekspresif hasil bimbingan kegiatan kemandirian seni lukis."
                ),
                array(
                    "id" => 4,
                    "name" => "Keripik Tempe Renyah",
                    "category" => "Kuliner",
                    "price" => "Rp 15.000",
                    "image" => "https://images.unsplash.com/photo-1621943806325-a7bda6b10787?q=80&w=800",
                    "desc" => "Camilan gurih dan higienis hasil olahan dapur sehat Rutan Depok."
                ),
                array(
                    "id" => 5,
                    "name" => "Meja Lipat Kayu",
                    "category" => "Meubel",
                    "price" => "Rp 175.000",
                    "image" => "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
                    "desc" => "Meja lipat serbaguna untuk belajar atau bekerja, praktis dan kokoh."
                ),
                array(
                    "id" => 6,
                    "name" => "Gantungan Kunci Kulit",
                    "category" => "Souvenir",
                    "price" => "Rp 25.000",
                    "image" => "https://images.unsplash.com/photo-1627225924765-552d44fc4c32?q=80&w=800",
                    "desc" => "Souvenir eksklusif dari bahan kulit sintetis dengan embos logo Rutan."
                )
            );

            foreach ($products as $idx => $product) :
            ?>
                <div class="product-card group relative bg-navy-800/40 rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-gold-500/30 transition-all duration-500 shadow-xl" 
                     data-category="<?php echo $product['category']; ?>" 
                     data-name="<?php echo strtolower($product['name']); ?>"
                     data-aos="fade-up" 
                     data-aos-delay="<?php echo $idx * 50; ?>">
                    <div class="aspect-square relative overflow-hidden">
                        <img
                            src="<?php echo $product['image']; ?>"
                            alt="<?php echo $product['name']; ?>"
                            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="absolute top-4 left-4">
                            <span class="bg-navy-900/80 backdrop-blur-md text-gold-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border border-gold-500/20 shadow-lg">
                                <?php echo $product['category']; ?>
                            </span>
                        </div>
                        <div class="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                            <button
                                class="open-modal w-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                data-product='<?php echo json_encode($product); ?>'
                            >
                                <i class="fa-solid fa-eye"></i> Detail Produk
                            </button>
                        </div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors uppercase tracking-tight"><?php echo $product['name']; ?></h3>
                        <div class="flex items-center justify-between mb-6">
                            <span class="text-gold-500 font-bold text-lg font-display"><?php echo $product['price']; ?></span>
                            <div class="flex items-center gap-1 text-slate-500 text-xs italic">
                                <i class="fa-solid fa-tag text-[10px]"></i> Tersedia
                            </div>
                        </div>
                        <button
                            onclick="handleWhatsApp('<?php echo addslashes($product['name']); ?>')"
                            class="w-full py-4 bg-gradient-gold text-primary font-black rounded-2xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                        >
                            <i class="fa-brands fa-whatsapp text-lg"></i> Pesan via WhatsApp
                        </button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Product Detail Modal -->
        <div id="product-modal" class="fixed inset-0 z-[200] hidden flex items-center justify-center p-4 md:p-8">
            <div class="absolute inset-0 bg-primary/95 backdrop-blur-2xl modal-close"></div>

            <div class="relative bg-navy-800 border border-white/10 rounded-[3rem] shadow-3xl max-w-5xl w-full overflow-hidden flex flex-col lg:flex-row transform scale-95 opacity-0 transition-all duration-300" id="modal-content">
                <button class="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-rose-500 text-white rounded-full flex items-center justify-center transition-all modal-close shadow-lg">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>

                <div class="lg:w-1/2">
                    <img id="modal-image" src="" alt="" class="w-full h-full object-cover aspect-square lg:aspect-auto ring-1 ring-white/10">
                </div>
                <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span id="modal-category" class="text-gold-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block"></span>
                    <h2 id="modal-name" class="text-4xl md:text-5xl font-display font-bold text-white mb-6 italic tracking-tighter"></h2>
                    <p id="modal-desc" class="text-slate-400 text-lg leading-relaxed mb-8 font-light italic"></p>

                    <div class="flex items-center justify-between py-6 border-y border-white/5 mb-8">
                        <div>
                            <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Harga Satuan</p>
                            <p id="modal-price" class="text-3xl font-black text-gold-500 font-display"></p>
                        </div>
                        <div class="bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-2">
                            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            Stok Tersedia
                        </div>
                    </div>

                    <div class="space-y-4">
                        <button
                            id="modal-wa-btn"
                            class="w-full py-5 bg-gradient-gold text-primary font-black rounded-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-xl"
                        >
                            <i class="fa-brands fa-whatsapp text-2xl"></i> Hubungi Admin Toko
                        </button>
                        <p class="text-center text-xs text-slate-500 italic font-medium">
                            *Pemesanan dapat dilakukan juga langsung di Ruang Layanan Rutan Depok.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Info -->
        <div class="mt-24 max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 text-center md:text-left backdrop-blur-sm" data-aos="fade-up">
            <div class="w-20 h-20 bg-gold-500/20 rounded-3xl flex items-center justify-center text-gold-500 shrink-0 shadow-lg border border-gold-500/20">
                <i class="fa-solid fa-circle-info text-3xl"></i>
            </div>
            <div>
                <h4 class="text-xl font-bold text-white mb-2 font-display">Tentang Kegiatan Kemandirian</h4>
                <p class="text-slate-400 leading-relaxed font-light italic">
                    Setiap pembelian produk merupakan bentuk dukungan nyata terhadap program rehabilitasi dan pembinaan kemandirian Warga Binaan Pemasyarakatan Rutan Depok. Hasil penjualan digunakan untuk pembinaan dan premi bagi WBP yang bekerja.
                </p>
            </div>
        </div>
    </div>
</div>

<script>
    function handleWhatsApp(productName) {
        const message = `Halo Admin Karya WBP Rutan Depok, saya tertarik dengan produk ${productName}. Mohon informasi ketersediaan stoknya.`;
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
    }

    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('product-search');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const productCards = document.querySelectorAll('.product-card');
        const modal = document.getElementById('product-modal');
        const modalContent = document.getElementById('modal-content');
        const openModalBtns = document.querySelectorAll('.open-modal');
        const closeModalBtns = document.querySelectorAll('.modal-close');

        let currentCategory = 'Semua';

        function filterProducts() {
            const query = searchInput.value.toLowerCase();
            productCards.forEach(card => {
                const name = card.getAttribute('data-name');
                const category = card.getAttribute('data-category');
                const matchesSearch = name.includes(query);
                const matchesCategory = currentCategory === 'Semua' || category === currentCategory;

                if (matchesSearch && matchesCategory) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        searchInput.addEventListener('input', filterProducts);

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => {
                    b.classList.remove('bg-gradient-gold', 'text-primary', 'border-transparent');
                    b.classList.add('bg-white/5', 'text-slate-400', 'border-white/5');
                });
                btn.classList.add('bg-gradient-gold', 'text-primary', 'border-transparent');
                btn.classList.remove('bg-white/5', 'text-slate-400', 'border-white/5');
                currentCategory = btn.getAttribute('data-category');
                filterProducts();
            });
        });

        openModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const product = JSON.parse(btn.getAttribute('data-product'));
                document.getElementById('modal-image').src = product.image;
                document.getElementById('modal-category').textContent = product.category;
                document.getElementById('modal-name').textContent = product.name;
                document.getElementById('modal-desc').textContent = product.desc;
                document.getElementById('modal-price').textContent = product.price;
                document.getElementById('modal-wa-btn').onclick = () => handleWhatsApp(product.name);

                modal.classList.remove('hidden');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
        });

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modalContent.classList.add('scale-95', 'opacity-0');
                modalContent.classList.remove('scale-100', 'opacity-100');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            });
        });
    });
</script>

<?php get_footer(); ?>
