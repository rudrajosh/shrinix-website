// Products Data - Using Actual Product Images
const productsData = {
    bedroom: [
        {
            id: 'bed-01',
            name: 'Single Bed With Storage (Honey Finish)',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹21,000',
            image: 'images/products/Bed-01/Gemini_Generated_Image_283py7283py7283p.png',
            gallery: [
                'images/products/Bed-01/Gemini_Generated_Image_283py7283py7283p.png',
                'images/products/Bed-01/Gemini_Generated_Image_aibcrlaibcrlaibc.png',
                'images/products/Bed-01/Gemini_Generated_Image_ergb43ergb43ergb.png',
                'images/products/Bed-01/Gemini_Generated_Image_ysng6tysng6tysng.png'
            ],
            description: 'Luxurious handcrafted wooden bed with intricate carvings and premium finish.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '88L x 39W x 33H',
            mattressSize: '78L X 36',
            brand: 'SHRINIX'
        },
        {
            id: 'bed-02',
            name: 'Sheesham Wood King Size Bed Without Storage (Honey Finish)',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹35,000',
            image: 'images/products/Bed-02/Gemini_Generated_Image_7rszhv7rszhv7rsz.png',
            gallery: [
                'images/products/Bed-02/Gemini_Generated_Image_7rszhv7rszhv7rsz.png',
                'images/products/Bed-02/Gemini_Generated_Image_c5qyjic5qyjic5qy.png',
                'images/products/Bed-02/Gemini_Generated_Image_ljxzdwljxzdwljxz.png',
                'images/products/Bed-02/Gemini_Generated_Image_mccghkmccghkmccg.png'
            ],
            description: 'Contemporary design wooden bed with clean lines and elegant aesthetics.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '82L x 75W x 42H',
            mattressSize: '78L x 72W',
            brand: 'SHRINIX'
        },
        {
            id: 'bedside-01',
            name: 'Bedside Table (Honey Finish)',
            category: 'bedroom',
            subcategory: 'Nightstands',
            price: '₹7,000',
            image: 'images/products/Bedside-01/Gemini_Generated_Image_anu47zanu47zanu4.png',
            gallery: [
                'images/products/Bedside-01/Gemini_Generated_Image_anu47zanu47zanu4.png',
                'images/products/Bedside-01/Gemini_Generated_Image_ffo09effo09effo0.png',
                'images/products/Bedside-01/Gemini_Generated_Image_jsoh4ljsoh4ljsoh.png',
                'images/products/Bedside-01/Gemini_Generated_Image_pth8okpth8okpth8.png'
            ],
            description: 'Compact bedside table with drawer and open shelf for essentials.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '16L x 16W x 17H',
            brand: 'SHRINIX'
        },
        {
            id: 'bed-03',
            name: 'Sheesham Wood Bed With Storage (King Size, Walnut/Honey Finish)',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹60,000',
            image: 'images/products/Bed-03/Gemini_Generated_Image_7ncxe47ncxe47ncx.png',
            gallery: [
                'images/products/Bed-03/Gemini_Generated_Image_7ncxe47ncxe47ncx.png',
                'images/products/Bed-03/Gemini_Generated_Image_gkwuydgkwuydgkwu.png',
                'images/products/Bed-03/Gemini_Generated_Image_h4r90eh4r90eh4r9.png',
                'images/products/Bed-03/Gemini_Generated_Image_uy6t72uy6t72uy6t.png'
            ],
            description: 'Premium upholstered bed with tufted headboard and storage.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '87 L x 75 W x 43 H',
            mattressSize: '78L x 72W',
            brand: 'SHRINIX'
        },
        {
            id: 'bed-04',
            name: 'Sheesham Wood Bed with Cane Detailing (King Size, Teak Finish)',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹50,000',
            image: 'images/products/Bed-04/Gemini_Generated_Image_lf23y3lf23y3lf23.png',
            gallery: [
                'images/products/Bed-04/Gemini_Generated_Image_lf23y3lf23y3lf23.png',
                'images/products/Bed-04/Gemini_Generated_Image_oxuwx0oxuwx0oxuw.png',
                'images/products/Bed-04/Gemini_Generated_Image_px9thrpx9thrpx9t.png',
                'images/products/Bed-04/Gemini_Generated_Image_s6afv4s6afv4s6af.png'
            ],
            description: 'Sleek platform bed with low profile design and wood finish.',
            material: 'Sheesham Wood',
            finish: 'Teak Finish',
            dimensions: '87 L x 75 W x 43 H',
            mattressSize: '78L x 72W',
            brand: 'SHRINIX'
        },
        {
            id: 'bed-05',
            name: 'Sheesham Wood Queen Size Bed Without Storage (Honey Finish)',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹60,000',
            image: 'images/products/Bed-05/Gemini_Generated_Image_42ef1k42ef1k42ef.png',
            gallery: [
                'images/products/Bed-05/Gemini_Generated_Image_42ef1k42ef1k42ef.png',
                'images/products/Bed-05/Gemini_Generated_Image_crno96crno96crno.png',
                'images/products/Bed-05/Gemini_Generated_Image_jwfjlgjwfjlgjwfj.png',
                'images/products/Bed-05/Gemini_Generated_Image_opmw7oopmw7oopmw.png'
            ],
            description: 'Elegant four-poster bed with detailed craftsmanship.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '82L x 75W x 42H',
            mattressSize: '78L x 72W',
            brand: 'SHRINIX'
        },
        {
            id: 'bed-06',
            name: 'Sheesham Wood Bed with Upholstered Headboard',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹58,000',
            image: 'images/products/Bed-06/Gemini_Generated_Image_axt97qaxt97qaxt9.png',
            gallery: [
                'images/products/Bed-06/Gemini_Generated_Image_axt97qaxt97qaxt9.png',
                'images/products/Bed-06/Gemini_Generated_Image_bw0n41bw0n41bw0n.png',
                'images/products/Bed-06/Gemini_Generated_Image_ja6bnrja6bnrja6b.png',
                'images/products/Bed-06/Gemini_Generated_Image_wk7imwwk7imwwk7i.png'
            ],
            description: 'Modern bed with hydraulic storage and integrated lighting.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '81 L x 63 W x 47 H',
            brand: 'SHRINIX'
        },
        {
            id: 'bed-07',
            name: 'Single Bed Without Storage (Honey Finish)',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹25,000',
            image: 'images/products/Bed-07/Gemini_Generated_Image_5sia265sia265sia.png',
            gallery: [
                'images/products/Bed-07/Gemini_Generated_Image_5sia265sia265sia.png',
                'images/products/Bed-07/Gemini_Generated_Image_e04cope04cope04c.png',
                'images/products/Bed-07/Gemini_Generated_Image_o9qt46o9qt46o9qt.png',
                'images/products/Bed-07/Gemini_Generated_Image_rpqclurpqclurpqc.png'
            ],
            description: 'Majestic canopy bed for a grand bedroom statement.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '81 L x 38 W x 13 H',
            brand: 'SHRINIX'
        }
    ],
    'living-room': [
        {
            id: 'cabinet-01',
            name: 'Bar Cabinet',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹38,000',
            image: 'images/products/Cabinet-01/front view1.png',
            gallery: [
                'images/products/Cabinet-01/front view1.png',
                'images/products/Cabinet-01/left view1.png',
                'images/products/Cabinet-01/right view1.png',
                'images/products/Cabinet-01/top view 1.png'
            ],
            description: 'Elegant display cabinet with glass panels and organized storage.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '36L x 20W x 43H',
            brand: 'SHRINIX'
        },
        {
            id: 'cabinet-02',
            name: 'Orden Storage Cabinet',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹25,000',
            image: 'images/products/Cabinet-02/front view1.png',
            gallery: [
                'images/products/Cabinet-02/front view1.png',
                'images/products/Cabinet-02/left view1.png',
                'images/products/Cabinet-02/right view1.png',
                'images/products/Cabinet-02/top view1.png'
            ],
            description: 'Traditional wooden cabinet with ample storage space.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '60L x 18W x 30H',
            brand: 'SHRINIX'
        },
        {
            id: 'cabinet-03',
            name: 'Console Table',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹12,000',
            image: 'images/products/Cabinet-03/Gemini_Generated_Image_22c4kp22c4kp22c4.png',
            gallery: [
                'images/products/Cabinet-03/Gemini_Generated_Image_22c4kp22c4kp22c4.png',
                'images/products/Cabinet-03/Gemini_Generated_Image_hnwaemhnwaemhnwa.png',
                'images/products/Cabinet-03/Gemini_Generated_Image_nvm3qmnvm3qmnvm3.png',
                'images/products/Cabinet-03/Gemini_Generated_Image_nzo0dhnzo0dhnzo0.png'
            ],
            description: 'Modern cabinet design perfect for contemporary living spaces.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '42L x 14W x 36H',
            brand: 'SHRINIX'
        },
        {
            id: 'cabinet-04',
            name: 'Storage Cabinet',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹23,000',
            image: 'images/products/Cabinet-04/Gemini_Generated_Image_ejkzmgejkzmgejkz.png',
            gallery: [
                'images/products/Cabinet-04/Gemini_Generated_Image_ejkzmgejkzmgejkz.png',
                'images/products/Cabinet-04/Gemini_Generated_Image_fehfx5fehfx5fehf.png',
                'images/products/Cabinet-04/Gemini_Generated_Image_rs02z2rs02z2rs02.png',
                'images/products/Cabinet-04/Gemini_Generated_Image_woxc54woxc54woxc.png'
            ],
            description: 'Premium quality cabinet with sophisticated design and finish.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '36L x 16W x 42H',
            brand: 'SHRINIX'
        },
        {
            id: 'sofa-01',
            name: 'Wooden Couch Diwan Sofa Settee for Living Room and Office | Three 3-Person Sofa',
            category: 'living-room',
            subcategory: 'Sofas',
            price: '₹28,000',
            image: 'images/products/Sofa-01/Gemini_Generated_Image_7l0iaw7l0iaw7l0i.png',
            gallery: [
                'images/products/Sofa-01/Gemini_Generated_Image_7l0iaw7l0iaw7l0i.png',
                'images/products/Sofa-01/Gemini_Generated_Image_s5dqsus5dqsus5dq.png',
                'images/products/Sofa-01/Gemini_Generated_Image_w16cqrw16cqrw16c.png',
                'images/products/Sofa-01/Gemini_Generated_Image_ykd3f6ykd3f6ykd3.png'
            ],
            description: 'Plush velvet sofa offering superior comfort and style.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '36L x 72W x 24H',
            brand: 'SHRINIX'
        },
        {
            id: 'sofa-02',
            name: 'Sheesham Wood 3 Seater Sofa Set Without Storage for Living Room Furniture',
            category: 'living-room',
            subcategory: 'Sofas',
            price: '₹30,000',
            image: 'images/products/Sofa-02/Gemini_Generated_Image_3p3wsm3p3wsm3p3w.png',
            gallery: [
                'images/products/Sofa-02/Gemini_Generated_Image_3p3wsm3p3wsm3p3w.png',
                'images/products/Sofa-02/Gemini_Generated_Image_in3e5win3e5win3e.png',
                'images/products/Sofa-02/Gemini_Generated_Image_ioo2weioo2weioo2.png',
                'images/products/Sofa-02/Gemini_Generated_Image_sqv5xxsqv5xxsqv5.png'
            ],
            description: 'Genuine leather sofa with clean lines and durable build.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '36L x 72W x 30H',
            brand: 'SHRINIX'
        },
        {
            id: 'sofa-set-1',
            name: 'Sheesham Wood 5-Seater Sofa Set (3+1+1)',
            category: 'living-room',
            subcategory: 'Sofas',
            price: '₹65,000',
            image: 'images/products/Sofa-set-1/Gemini_Generated_Image_dsljaodsljaodslj.png',
            gallery: [
                'images/products/Sofa-set-1/Gemini_Generated_Image_dsljaodsljaodslj.png',
                'images/products/Sofa-set-1/Gemini_Generated_Image_e7jrrqe7jrrqe7jr.png',
                'images/products/Sofa-set-1/Gemini_Generated_Image_ov2owzov2owzov2o.png',
                'images/products/Sofa-set-1/Gemini_Generated_Image_rjyxllrjyxllrjyx.png'
            ],
            description: 'Grand sofa set including 3-seater and 2-seater for large living rooms.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '72L x 28W x 33H',
            brand: 'SHRINIX'
        }
    ],
    dining: [
        {
            id: 'table-01',
            name: 'Console Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹11,000',
            image: 'images/products/Table-01/Gemini_Generated_Image_d6kbxfd6kbxfd6kb.png',
            gallery: [
                'images/products/Table-01/Gemini_Generated_Image_d6kbxfd6kbxfd6kb.png',
                'images/products/Table-01/Gemini_Generated_Image_lifu4mlifu4mlifu.png',
                'images/products/Table-01/Gemini_Generated_Image_powwehpowwehpoww.png',
                'images/products/Table-01/Gemini_Generated_Image_qn713nqn713nqn71.png'
            ],
            description: 'Elegant dining table crafted from premium wood with timeless design.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '36L x 12W x 30H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-02',
            name: 'Study Table with Drawer & Cabinet',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹21,000',
            image: 'images/products/Table-02/front view2.png',
            gallery: [
                'images/products/Table-02/front view2.png',
                'images/products/Table-02/left view2.png',
                'images/products/Table-02/right view2.png',
                'images/products/Table-02/Gemini_Generated_Image_z67moiz67moiz67m.png'
            ],
            description: 'Contemporary dining table with sleek lines and sturdy construction.',
            material: 'Sheesham Wood',
            finish: 'Wallnut Finish',
            dimensions: '42L x 22W x 30H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-03',
            name: 'Center Table / Display Unit / Coffee Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹10,000',
            image: 'images/products/Table-03/Gemini_Generated_Image_1qtm0j1qtm0j1qtm.png',
            gallery: [
                'images/products/Table-03/Gemini_Generated_Image_1qtm0j1qtm0j1qtm.png',
                'images/products/Table-03/Gemini_Generated_Image_7dhb0g7dhb0g7dhb.png',
                'images/products/Table-03/Gemini_Generated_Image_9pkz7w9pkz7w9pkz.png',
                'images/products/Table-03/Gemini_Generated_Image_nee0nlnee0nlnee0.png'
            ],
            description: 'Luxurious dining table with intricate details and royal aesthetics.',
            material: 'Sheesham Wood',
            finish: 'Wallnut Finish',
            dimensions: '28L x 16W x 28H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-04',
            name: 'Metal Base Sheesham Wood Tv Unit with Drawers and Cabinets',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹26,000',
            image: 'images/products/Table-04/Gemini_Generated_Image_d494pid494pid494.png',
            gallery: [
                'images/products/Table-04/Gemini_Generated_Image_d494pid494pid494.png',
                'images/products/Table-04/Gemini_Generated_Image_eoqlgxeoqlgxeoql.png',
                'images/products/Table-04/Gemini_Generated_Image_m5l5lam5l5lam5l5.png',
                'images/products/Table-04/Gemini_Generated_Image_qvb2n7qvb2n7qvb2.png'
            ],
            description: 'Space-saving dining table perfect for smaller dining areas.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '67L x 18W x 24H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-05',
            name: 'Sheesham Wood Tv Unit with Cupboards drawres',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹25,000',
            image: 'images/products/Table-05/Gemini_Generated_Image_81hbk281hbk281hb.png',
            gallery: [
                'images/products/Table-05/Gemini_Generated_Image_81hbk281hbk281hb.png',
                'images/products/Table-05/Gemini_Generated_Image_8210fm8210fm8210.png',
                'images/products/Table-05/Gemini_Generated_Image_8hou6l8hou6l8hou.png',
                'images/products/Table-05/Gemini_Generated_Image_zgbvgozgbvgozgbv.png'
            ],
            description: 'Premium dining table with executive styling and superior craftsmanship.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '67L x 16W x 20H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-06',
            name: 'Console Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹11,000',
            image: 'images/products/Table-06/Gemini_Generated_Image_9nwdl79nwdl79nwd.png',
            gallery: [
                'images/products/Table-06/Gemini_Generated_Image_9nwdl79nwdl79nwd.png',
                'images/products/Table-06/Gemini_Generated_Image_fbd15hfbd15hfbd1.png',
                'images/products/Table-06/Gemini_Generated_Image_hcukjohcukjohcuk.png',
                'images/products/Table-06/Gemini_Generated_Image_sot9hmsot9hmsot9.png'
            ],
            description: 'Spacious dining table ideal for family gatherings and celebrations.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '36L x 12W x 34H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-07',
            name: 'Modern Shoe Rack Bench',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹14,000',
            image: 'images/products/Table-07/Gemini_Generated_Image_1i97yq1i97yq1i97.png',
            gallery: [
                'images/products/Table-07/Gemini_Generated_Image_1i97yq1i97yq1i97.png',
                'images/products/Table-07/Gemini_Generated_Image_5rkwd25rkwd25rkw.png',
                'images/products/Table-07/Gemini_Generated_Image_r9w8j1r9w8j1r9w8.png',
                'images/products/Table-07/Gemini_Generated_Image_s3twcss3twcss3tw.png'
            ],
            description: 'Unique designer dining table with artistic elements and premium finish.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '45L x 16W x 21.5H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-set-01',
            name: 'Nest of Table (Set of Three)',
            category: 'dining',
            subcategory: 'Dining Sets',
            price: '₹7,000',
            image: 'images/products/Table-Set-01/front view.png',
            gallery: [
                'images/products/Table-Set-01/front view.png',
                'images/products/Table-Set-01/left view.png',
                'images/products/Table-Set-01/right view.png',
                'images/products/Table-Set-01/Top view.png'
            ],
            description: 'Complete dining set with table and matching accessories for a cohesive look.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '20L x 16W x 20H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-chair-set',
            name: '4 Seater Dinning Set',
            category: 'dining',
            subcategory: 'Dining Sets',
            price: '₹35,000',
            image: 'images/products/Table-chair-set/Gemini_Generated_Image_114vjb114vjb114v.png',
            gallery: [
                'images/products/Table-chair-set/Gemini_Generated_Image_114vjb114vjb114v.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_6vkbn76vkbn76vkb.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_f6wje8f6wje8f6wj.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_gra6cxgra6cxgra6.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_gue495gue495gue4.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_ohxeyyohxeyyohxe.png'
            ],
            description: 'Luxurious dining set with table and matching chairs, perfect for elegant dining.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '36L x 36W x 30H',
            brand: 'SHRINIX'
        },
        {
            id: 'table-08',
            name: 'Marble Top Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹58,000',
            image: 'images/products/Table-08/Gemini_Generated_Image_484ff7484ff7484f.png',
            gallery: [
                'images/products/Table-08/Gemini_Generated_Image_484ff7484ff7484f.png',
                'images/products/Table-08/Gemini_Generated_Image_7bq20s7bq20s7bq2.png',
                'images/products/Table-08/Gemini_Generated_Image_h44qr9h44qr9h44q.png',
                'images/products/Table-08/Gemini_Generated_Image_ixsrieixsrieixsr.png'
            ],
            description: 'Exquisite marble top dining table with wooden legs.'
        },
        {
            id: 'table-09',
            name: 'Round Glass Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹32,000',
            image: 'images/products/Table-09/Gemini_Generated_Image_318mf2318mf2318m.png',
            gallery: [
                'images/products/Table-09/Gemini_Generated_Image_318mf2318mf2318m.png',
                'images/products/Table-09/Gemini_Generated_Image_egdmy0egdmy0egdm.png',
                'images/products/Table-09/Gemini_Generated_Image_fmgxf1fmgxf1fmgx.png',
                'images/products/Table-09/Gemini_Generated_Image_onxyatonxyatonxy.png'
            ],
            description: 'Modern round dining table with tempered glass top.'
        },
        {
            id: 'table-10',
            name: 'Industrial Style Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹36,000',
            image: 'images/products/Table-10/Gemini_Generated_Image_3etl3g3etl3g3etl.png',
            gallery: [
                'images/products/Table-10/Gemini_Generated_Image_3etl3g3etl3g3etl.png',
                'images/products/Table-10/Gemini_Generated_Image_hftvnqhftvnqhftv.png',
                'images/products/Table-10/Gemini_Generated_Image_kzgvfxkzgvfxkzgv.png',
                'images/products/Table-10/Gemini_Generated_Image_qk0ztzqk0ztzqk0z.png'
            ],
            description: 'Rugged industrial dining table with metal and wood fusion.'
        },
        {
            id: 'dinner-table-set-01',
            name: 'Premium Sheesham Wood 6 Seater Dining Set with Cushioned Chair (Honey Finish)',
            category: 'dining',
            subcategory: 'Dining Sets',
            price: '₹45,000',
            image: 'images/products/Dinner-table-set-01/Gemini_Generated_Image_g40qbog40qbog40q.png',
            gallery: [
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_g40qbog40qbog40q.png',
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_kglm4fkglm4fkglm.png',
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_lciik8lciik8lcii.png',
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_uhvylguhvylguhvy.png'
            ],
            description: 'Complete dining set for 6, focusing on comfort and durability.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: 'TABLE 59 L x 36 W x 30 H | CHAIR 18 L x 18 W x 35 H',
            brand: 'SHRINIX'
        }
    ],
    study: [
        // Study items can be added here if you have them
    ],
    storage: [
        {
            id: 'shelf-01',
            name: 'Sheesham Wood Corner Book Shelf',
            category: 'storage',
            subcategory: 'Shelves',
            price: '₹9,500',
            image: 'images/products/Shelf-01/Gemini_Generated_Image_iddc43iddc43iddc.png',
            gallery: [
                'images/products/Shelf-01/Gemini_Generated_Image_iddc43iddc43iddc.png',
                'images/products/Shelf-01/Gemini_Generated_Image_iw9i77iw9i77iw9i.png',
                'images/products/Shelf-01/Gemini_Generated_Image_pwsuxipwsuxipwsu.png',
                'images/products/Shelf-01/Gemini_Generated_Image_ybl43oybl43oybl4.png'
            ],
            description: 'Stylish wall shelf with contemporary design for books and decor.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '12L x 12W x 64H',
            brand: 'SHRINIX'
        },
        {
            id: 'shelf-02',
            name: 'Home Temple',
            category: 'storage',
            subcategory: 'Shelves',
            price: '₹16,000',
            image: 'images/products/Shelf-02/Gemini_Generated_Image_47rbow47rbow47rb.png',
            gallery: [
                'images/products/Shelf-02/Gemini_Generated_Image_47rbow47rbow47rb.png',
                'images/products/Shelf-02/Gemini_Generated_Image_iha9y5iha9y5iha9.png',
                'images/products/Shelf-02/Gemini_Generated_Image_uiyniluiyniluiyn.png',
                'images/products/Shelf-02/Gemini_Generated_Image_xhrutzxhrutzxhru.png'
            ],
            description: 'Traditional bookshelf with multiple tiers for organized storage.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '28L x 16W x 45H',
            brand: 'SHRINIX'
        },
        {
            id: 'shelf-03',
            name: 'Shoe Rack with shelf',
            category: 'storage',
            subcategory: 'Shelves',
            price: '₹6,000',
            image: 'images/products/Shelf-03/Gemini_Generated_Image_atkyveatkyveatky.png',
            gallery: [
                'images/products/Shelf-03/Gemini_Generated_Image_atkyveatkyveatky.png',
                'images/products/Shelf-03/Gemini_Generated_Image_prkms8prkms8prkm.png',
                'images/products/Shelf-03/Gemini_Generated_Image_sp4o08sp4o08sp4o.png',
                'images/products/Shelf-03/Gemini_Generated_Image_y0p255y0p255y0p2.png'
            ],
            description: 'Versatile display shelf unit perfect for showcasing collectibles.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '30L x 14W x 28H',
            brand: 'SHRINIX'
        }
    ],
    decor: [
        {
            id: 'mirror-01',
            name: 'Sheesham Wood Full Length Dressing Mirror (Floor Rested)',
            category: 'decor',
            subcategory: 'Mirrors',
            price: '₹7,000',
            image: 'images/products/Mirror-01/Gemini_Generated_Image_3kwmz73kwmz73kwm.png',
            gallery: [
                'images/products/Mirror-01/Gemini_Generated_Image_3kwmz73kwmz73kwm.png',
                'images/products/Mirror-01/Gemini_Generated_Image_7veyvv7veyvv7vey.png',
                'images/products/Mirror-01/Gemini_Generated_Image_e18k70e18k70e18k.png',
                'images/products/Mirror-01/Gemini_Generated_Image_wzew5vwzew5vwzew.png'
            ],
            description: 'Ornate wooden frame mirror perfect for adding elegance to any room.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '66L x 20W',
            brand: 'SHRINIX'
        },
        {
            id: 'mirror-02',
            name: 'Sheesham Wood Full Length Dressing Mirror (Wall Rested)',
            category: 'decor',
            subcategory: 'Mirrors',
            price: '₹15,000',
            image: 'images/products/Mirror-02/Gemini_Generated_Image_d827mcd827mcd827.png',
            gallery: [
                'images/products/Mirror-02/Gemini_Generated_Image_d827mcd827mcd827.png',
                'images/products/Mirror-02/Gemini_Generated_Image_elrmcwelrmcwelrm.png',
                'images/products/Mirror-02/Gemini_Generated_Image_fnzwibfnzwibfnzw.png',
                'images/products/Mirror-02/Gemini_Generated_Image_qib5taqib5taqib5.png'
            ],
            description: 'Sleek round mirror with minimalist frame for contemporary homes.',
            material: 'Sheesham Wood',
            finish: 'Honey Finish',
            dimensions: '24L x 15W x 54H',
            brand: 'SHRINIX'
        }
    ]
};

const categories = [
    {
        id: 'bedroom',
        name: 'Bedroom',
        image: 'images/products/Bed-01/Gemini_Generated_Image_283py7283py7283p.png',
        count: productsData.bedroom.length
    },
    {
        id: 'living-room',
        name: 'Living Room',
        image: 'images/products/Cabinet-01/front view1.png',
        count: productsData['living-room'].length
    },
    {
        id: 'dining',
        name: 'Dining',
        image: 'images/products/Table-01/Gemini_Generated_Image_d6kbxfd6kbxfd6kb.png',
        count: productsData.dining.length
    },
    {
        id: 'study',
        name: 'Study & Office',
        image: 'images/products/Table-02/front view2.png',
        count: productsData.study.length
    },
    {
        id: 'storage',
        name: 'Storage',
        image: 'images/products/Shelf-01/Gemini_Generated_Image_iddc43iddc43iddc.png',
        count: productsData.storage.length
    },
    {
        id: 'decor',
        name: 'Home Decor',
        image: 'images/products/Mirror-01/Gemini_Generated_Image_3kwmz73kwmz73kwm.png',
        count: productsData.decor.length
    }
];

// Get all products as a flat array
function getAllProducts() {
    return Object.values(productsData).flat();
}

// Get products by category
function getProductsByCategory(categoryId) {
    return productsData[categoryId] || [];
}

// Get single product by ID
function getProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// Get category by ID
function getCategoryById(categoryId) {
    return categories.find(c => c.id === categoryId);
}
