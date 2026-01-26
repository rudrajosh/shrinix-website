// Products Data - Using Actual Product Images
const productsData = {
    bedroom: [
        {
            id: 'bed-01',
            name: 'Royal Wooden Bed',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹45,000',
            image: 'images/products/Bed-01/Gemini_Generated_Image_283py7283py7283p.png',
            gallery: [
                'images/products/Bed-01/Gemini_Generated_Image_283py7283py7283p.png',
                'images/products/Bed-01/Gemini_Generated_Image_aibcrlaibcrlaibc.png',
                'images/products/Bed-01/Gemini_Generated_Image_ergb43ergb43ergb.png',
                'images/products/Bed-01/Gemini_Generated_Image_ysng6tysng6tysng.png'
            ],
            description: 'Luxurious handcrafted wooden bed with intricate carvings and premium finish.'
        },
        {
            id: 'bed-02',
            name: 'Modern Wooden Bed',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹42,000',
            image: 'images/products/Bed-02/Gemini_Generated_Image_7rszhv7rszhv7rsz.png',
            gallery: [
                'images/products/Bed-02/Gemini_Generated_Image_7rszhv7rszhv7rsz.png',
                'images/products/Bed-02/Gemini_Generated_Image_c5qyjic5qyjic5qy.png',
                'images/products/Bed-02/Gemini_Generated_Image_ljxzdwljxzdwljxz.png',
                'images/products/Bed-02/Gemini_Generated_Image_mccghkmccghkmccg.png'
            ],
            description: 'Contemporary design wooden bed with clean lines and elegant aesthetics.'
        },
        {
            id: 'bedside-01',
            name: 'Bedside Table',
            category: 'bedroom',
            subcategory: 'Nightstands',
            price: '₹8,500',
            image: 'images/products/Bedside-01/Gemini_Generated_Image_anu47zanu47zanu4.png',
            gallery: [
                'images/products/Bedside-01/Gemini_Generated_Image_anu47zanu47zanu4.png',
                'images/products/Bedside-01/Gemini_Generated_Image_ffo09effo09effo0.png',
                'images/products/Bedside-01/Gemini_Generated_Image_jsoh4ljsoh4ljsoh.png',
                'images/products/Bedside-01/Gemini_Generated_Image_pth8okpth8okpth8.png'
            ],
            description: 'Compact bedside table with drawer and open shelf for essentials.'
        },
        {
            id: 'bed-03',
            name: 'Luxury Upholstered Bed',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹55,000',
            image: 'images/products/Bed-03/Gemini_Generated_Image_7ncxe47ncxe47ncx.png',
            gallery: [
                'images/products/Bed-03/Gemini_Generated_Image_7ncxe47ncxe47ncx.png',
                'images/products/Bed-03/Gemini_Generated_Image_gkwuydgkwuydgkwu.png',
                'images/products/Bed-03/Gemini_Generated_Image_h4r90eh4r90eh4r9.png',
                'images/products/Bed-03/Gemini_Generated_Image_uy6t72uy6t72uy6t.png'
            ],
            description: 'Premium upholstered bed with tufted headboard and storage.'
        },
        {
            id: 'bed-04',
            name: 'Minimalist Platform Bed',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹38,000',
            image: 'images/products/Bed-04/Gemini_Generated_Image_lf23y3lf23y3lf23.png',
            gallery: [
                'images/products/Bed-04/Gemini_Generated_Image_lf23y3lf23y3lf23.png',
                'images/products/Bed-04/Gemini_Generated_Image_oxuwx0oxuwx0oxuw.png',
                'images/products/Bed-04/Gemini_Generated_Image_px9thrpx9thrpx9t.png',
                'images/products/Bed-04/Gemini_Generated_Image_s6afv4s6afv4s6af.png'
            ],
            description: 'Sleek platform bed with low profile design and wood finish.'
        },
        {
            id: 'bed-05',
            name: 'Classic Poster Bed',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹62,000',
            image: 'images/products/Bed-05/Gemini_Generated_Image_42ef1k42ef1k42ef.png',
            gallery: [
                'images/products/Bed-05/Gemini_Generated_Image_42ef1k42ef1k42ef.png',
                'images/products/Bed-05/Gemini_Generated_Image_crno96crno96crno.png',
                'images/products/Bed-05/Gemini_Generated_Image_jwfjlgjwfjlgjwfj.png',
                'images/products/Bed-05/Gemini_Generated_Image_opmw7oopmw7oopmw.png'
            ],
            description: 'Elegant four-poster bed with detailed craftsmanship.'
        },
        {
            id: 'bed-06',
            name: 'Contemporary Storage Bed',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹48,000',
            image: 'images/products/Bed-06/Gemini_Generated_Image_axt97qaxt97qaxt9.png',
            gallery: [
                'images/products/Bed-06/Gemini_Generated_Image_axt97qaxt97qaxt9.png',
                'images/products/Bed-06/Gemini_Generated_Image_bw0n41bw0n41bw0n.png',
                'images/products/Bed-06/Gemini_Generated_Image_ja6bnrja6bnrja6b.png',
                'images/products/Bed-06/Gemini_Generated_Image_wk7imwwk7imwwk7i.png'
            ],
            description: 'Modern bed with hydraulic storage and integrated lighting.'
        },
        {
            id: 'bed-07',
            name: 'Royal Canopy Bed',
            category: 'bedroom',
            subcategory: 'Beds',
            price: '₹75,000',
            image: 'images/products/Bed-07/Gemini_Generated_Image_5sia265sia265sia.png',
            gallery: [
                'images/products/Bed-07/Gemini_Generated_Image_5sia265sia265sia.png',
                'images/products/Bed-07/Gemini_Generated_Image_e04cope04cope04c.png',
                'images/products/Bed-07/Gemini_Generated_Image_o9qt46o9qt46o9qt.png',
                'images/products/Bed-07/Gemini_Generated_Image_rpqclurpqclurpqc.png'
            ],
            description: 'Majestic canopy bed for a grand bedroom statement.'
        }
    ],
    'living-room': [
        {
            id: 'cabinet-01',
            name: 'Premium Display Cabinet',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹32,000',
            image: 'images/products/Cabinet-01/front view1.png',
            gallery: [
                'images/products/Cabinet-01/front view1.png',
                'images/products/Cabinet-01/left view1.png',
                'images/products/Cabinet-01/right view1.png',
                'images/products/Cabinet-01/top view 1.png'
            ],
            description: 'Elegant display cabinet with glass panels and organized storage.'
        },
        {
            id: 'cabinet-02',
            name: 'Classic Wooden Cabinet',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹28,000',
            image: 'images/products/Cabinet-02/front view1.png',
            gallery: [
                'images/products/Cabinet-02/front view1.png',
                'images/products/Cabinet-02/left view1.png',
                'images/products/Cabinet-02/right view1.png',
                'images/products/Cabinet-02/top view1.png'
            ],
            description: 'Traditional wooden cabinet with ample storage space.'
        },
        {
            id: 'cabinet-03',
            name: 'Contemporary Cabinet',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹35,000',
            image: 'images/products/Cabinet-03/Gemini_Generated_Image_22c4kp22c4kp22c4.png',
            gallery: [
                'images/products/Cabinet-03/Gemini_Generated_Image_22c4kp22c4kp22c4.png',
                'images/products/Cabinet-03/Gemini_Generated_Image_hnwaemhnwaemhnwa.png',
                'images/products/Cabinet-03/Gemini_Generated_Image_nvm3qmnvm3qmnvm3.png',
                'images/products/Cabinet-03/Gemini_Generated_Image_nzo0dhnzo0dhnzo0.png'
            ],
            description: 'Modern cabinet design perfect for contemporary living spaces.'
        },
        {
            id: 'cabinet-04',
            name: 'Luxury Storage Cabinet',
            category: 'living-room',
            subcategory: 'Cabinets',
            price: '₹38,000',
            image: 'images/products/Cabinet-04/Gemini_Generated_Image_ejkzmgejkzmgejkz.png',
            gallery: [
                'images/products/Cabinet-04/Gemini_Generated_Image_ejkzmgejkzmgejkz.png',
                'images/products/Cabinet-04/Gemini_Generated_Image_fehfx5fehfx5fehf.png',
                'images/products/Cabinet-04/Gemini_Generated_Image_rs02z2rs02z2rs02.png',
                'images/products/Cabinet-04/Gemini_Generated_Image_woxc54woxc54woxc.png'
            ],
            description: 'Premium quality cabinet with sophisticated design and finish.'
        },
        {
            id: 'sofa-01',
            name: 'Luxury Velvet Sofa',
            category: 'living-room',
            subcategory: 'Sofas',
            price: '₹45,000',
            image: 'images/products/Sofa-01/Gemini_Generated_Image_7l0iaw7l0iaw7l0i.png',
            gallery: [
                'images/products/Sofa-01/Gemini_Generated_Image_7l0iaw7l0iaw7l0i.png',
                'images/products/Sofa-01/Gemini_Generated_Image_s5dqsus5dqsus5dq.png',
                'images/products/Sofa-01/Gemini_Generated_Image_w16cqrw16cqrw16c.png',
                'images/products/Sofa-01/Gemini_Generated_Image_ykd3f6ykd3f6ykd3.png'
            ],
            description: 'Plush velvet sofa offering superior comfort and style.'
        },
        {
            id: 'sofa-02',
            name: 'Modern Leather Sofa',
            category: 'living-room',
            subcategory: 'Sofas',
            price: '₹55,000',
            image: 'images/products/Sofa-02/Gemini_Generated_Image_3p3wsm3p3wsm3p3w.png',
            gallery: [
                'images/products/Sofa-02/Gemini_Generated_Image_3p3wsm3p3wsm3p3w.png',
                'images/products/Sofa-02/Gemini_Generated_Image_in3e5win3e5win3e.png',
                'images/products/Sofa-02/Gemini_Generated_Image_ioo2weioo2weioo2.png',
                'images/products/Sofa-02/Gemini_Generated_Image_sqv5xxsqv5xxsqv5.png'
            ],
            description: 'Genuine leather sofa with clean lines and durable build.'
        },
        {
            id: 'sofa-set-1',
            name: 'Royal Sofa Set',
            category: 'living-room',
            subcategory: 'Sofas',
            price: '₹95,000',
            image: 'images/products/Sofa-set-1/Gemini_Generated_Image_dsljaodsljaodslj.png',
            gallery: [
                'images/products/Sofa-set-1/Gemini_Generated_Image_dsljaodsljaodslj.png',
                'images/products/Sofa-set-1/Gemini_Generated_Image_e7jrrqe7jrrqe7jr.png',
                'images/products/Sofa-set-1/Gemini_Generated_Image_ov2owzov2owzov2o.png',
                'images/products/Sofa-set-1/Gemini_Generated_Image_rjyxllrjyxllrjyx.png'
            ],
            description: 'Grand sofa set including 3-seater and 2-seater for large living rooms.'
        }
    ],
    dining: [
        {
            id: 'table-01',
            name: 'Classic Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹45,000',
            image: 'images/products/Table-01/Gemini_Generated_Image_d6kbxfd6kbxfd6kb.png',
            gallery: [
                'images/products/Table-01/Gemini_Generated_Image_d6kbxfd6kbxfd6kb.png',
                'images/products/Table-01/Gemini_Generated_Image_lifu4mlifu4mlifu.png',
                'images/products/Table-01/Gemini_Generated_Image_powwehpowwehpoww.png',
                'images/products/Table-01/Gemini_Generated_Image_qn713nqn713nqn71.png'
            ],
            description: 'Elegant dining table crafted from premium wood with timeless design.'
        },
        {
            id: 'table-02',
            name: 'Modern Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹42,000',
            image: 'images/products/Table-02/front view2.png',
            gallery: [
                'images/products/Table-02/front view2.png',
                'images/products/Table-02/left view2.png',
                'images/products/Table-02/right view2.png',
                'images/products/Table-02/Gemini_Generated_Image_z67moiz67moiz67m.png'
            ],
            description: 'Contemporary dining table with sleek lines and sturdy construction.'
        },
        {
            id: 'table-03',
            name: 'Royal Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹52,000',
            image: 'images/products/Table-03/Gemini_Generated_Image_1qtm0j1qtm0j1qtm.png',
            gallery: [
                'images/products/Table-03/Gemini_Generated_Image_1qtm0j1qtm0j1qtm.png',
                'images/products/Table-03/Gemini_Generated_Image_7dhb0g7dhb0g7dhb.png',
                'images/products/Table-03/Gemini_Generated_Image_9pkz7w9pkz7w9pkz.png',
                'images/products/Table-03/Gemini_Generated_Image_nee0nlnee0nlnee0.png'
            ],
            description: 'Luxurious dining table with intricate details and royal aesthetics.'
        },
        {
            id: 'table-04',
            name: 'Compact Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹35,000',
            image: 'images/products/Table-04/Gemini_Generated_Image_d494pid494pid494.png',
            gallery: [
                'images/products/Table-04/Gemini_Generated_Image_d494pid494pid494.png',
                'images/products/Table-04/Gemini_Generated_Image_eoqlgxeoqlgxeoql.png',
                'images/products/Table-04/Gemini_Generated_Image_m5l5lam5l5lam5l5.png',
                'images/products/Table-04/Gemini_Generated_Image_qvb2n7qvb2n7qvb2.png'
            ],
            description: 'Space-saving dining table perfect for smaller dining areas.'
        },
        {
            id: 'table-05',
            name: 'Executive Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹48,000',
            image: 'images/products/Table-05/Gemini_Generated_Image_81hbk281hbk281hb.png',
            gallery: [
                'images/products/Table-05/Gemini_Generated_Image_81hbk281hbk281hb.png',
                'images/products/Table-05/Gemini_Generated_Image_8210fm8210fm8210.png',
                'images/products/Table-05/Gemini_Generated_Image_8hou6l8hou6l8hou.png',
                'images/products/Table-05/Gemini_Generated_Image_zgbvgozgbvgozgbv.png'
            ],
            description: 'Premium dining table with executive styling and superior craftsmanship.'
        },
        {
            id: 'table-06',
            name: 'Family Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹46,000',
            image: 'images/products/Table-06/Gemini_Generated_Image_9nwdl79nwdl79nwd.png',
            gallery: [
                'images/products/Table-06/Gemini_Generated_Image_9nwdl79nwdl79nwd.png',
                'images/products/Table-06/Gemini_Generated_Image_fbd15hfbd15hfbd1.png',
                'images/products/Table-06/Gemini_Generated_Image_hcukjohcukjohcuk.png',
                'images/products/Table-06/Gemini_Generated_Image_sot9hmsot9hmsot9.png'
            ],
            description: 'Spacious dining table ideal for family gatherings and celebrations.'
        },
        {
            id: 'table-07',
            name: 'Designer Dining Table',
            category: 'dining',
            subcategory: 'Dining Tables',
            price: '₹55,000',
            image: 'images/products/Table-07/Gemini_Generated_Image_1i97yq1i97yq1i97.png',
            gallery: [
                'images/products/Table-07/Gemini_Generated_Image_1i97yq1i97yq1i97.png',
                'images/products/Table-07/Gemini_Generated_Image_5rkwd25rkwd25rkw.png',
                'images/products/Table-07/Gemini_Generated_Image_r9w8j1r9w8j1r9w8.png',
                'images/products/Table-07/Gemini_Generated_Image_s3twcss3twcss3tw.png'
            ],
            description: 'Unique designer dining table with artistic elements and premium finish.'
        },
        {
            id: 'table-set-01',
            name: 'Complete Dining Set',
            category: 'dining',
            subcategory: 'Dining Sets',
            price: '₹75,000',
            image: 'images/products/Table-Set-01/front view.png',
            gallery: [
                'images/products/Table-Set-01/front view.png',
                'images/products/Table-Set-01/left view.png',
                'images/products/Table-Set-01/right view.png',
                'images/products/Table-Set-01/Top view.png'
            ],
            description: 'Complete dining set with table and matching accessories for a cohesive look.'
        },
        {
            id: 'table-chair-set',
            name: 'Premium Table & Chair Set',
            category: 'dining',
            subcategory: 'Dining Sets',
            price: '₹85,000',
            image: 'images/products/Table-chair-set/Gemini_Generated_Image_114vjb114vjb114v.png',
            gallery: [
                'images/products/Table-chair-set/Gemini_Generated_Image_114vjb114vjb114v.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_6vkbn76vkbn76vkb.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_f6wje8f6wje8f6wj.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_gra6cxgra6cxgra6.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_gue495gue495gue4.png',
                'images/products/Table-chair-set/Gemini_Generated_Image_ohxeyyohxeyyohxe.png'
            ],
            description: 'Luxurious dining set with table and matching chairs, perfect for elegant dining.'
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
            name: 'Family Dining Set',
            category: 'dining',
            subcategory: 'Dining Sets',
            price: '₹68,000',
            image: 'images/products/Dinner-table-set-01/Gemini_Generated_Image_g40qbog40qbog40q.png',
            gallery: [
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_g40qbog40qbog40q.png',
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_kglm4fkglm4fkglm.png',
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_lciik8lciik8lcii.png',
                'images/products/Dinner-table-set-01/Gemini_Generated_Image_uhvylguhvylguhvy.png'
            ],
            description: 'Complete dining set for 6, focusing on comfort and durability.'
        }
    ],
    study: [
        // Study items can be added here if you have them
    ],
    storage: [
        {
            id: 'shelf-01',
            name: 'Modern Wall Shelf',
            category: 'storage',
            subcategory: 'Shelves',
            price: '₹12,000',
            image: 'images/products/Shelf-01/Gemini_Generated_Image_iddc43iddc43iddc.png',
            gallery: [
                'images/products/Shelf-01/Gemini_Generated_Image_iddc43iddc43iddc.png',
                'images/products/Shelf-01/Gemini_Generated_Image_iw9i77iw9i77iw9i.png',
                'images/products/Shelf-01/Gemini_Generated_Image_pwsuxipwsuxipwsu.png',
                'images/products/Shelf-01/Gemini_Generated_Image_ybl43oybl43oybl4.png'
            ],
            description: 'Stylish wall shelf with contemporary design for books and decor.'
        },
        {
            id: 'shelf-02',
            name: 'Classic Bookshelf',
            category: 'storage',
            subcategory: 'Shelves',
            price: '₹18,000',
            image: 'images/products/Shelf-02/Gemini_Generated_Image_47rbow47rbow47rb.png',
            gallery: [
                'images/products/Shelf-02/Gemini_Generated_Image_47rbow47rbow47rb.png',
                'images/products/Shelf-02/Gemini_Generated_Image_iha9y5iha9y5iha9.png',
                'images/products/Shelf-02/Gemini_Generated_Image_uiyniluiyniluiyn.png',
                'images/products/Shelf-02/Gemini_Generated_Image_xhrutzxhrutzxhru.png'
            ],
            description: 'Traditional bookshelf with multiple tiers for organized storage.'
        },
        {
            id: 'shelf-03',
            name: 'Display Shelf Unit',
            category: 'storage',
            subcategory: 'Shelves',
            price: '₹22,000',
            image: 'images/products/Shelf-03/Gemini_Generated_Image_atkyveatkyveatky.png',
            gallery: [
                'images/products/Shelf-03/Gemini_Generated_Image_atkyveatkyveatky.png',
                'images/products/Shelf-03/Gemini_Generated_Image_prkms8prkms8prkm.png',
                'images/products/Shelf-03/Gemini_Generated_Image_sp4o08sp4o08sp4o.png',
                'images/products/Shelf-03/Gemini_Generated_Image_y0p255y0p255y0p2.png'
            ],
            description: 'Versatile display shelf unit perfect for showcasing collectibles.'
        }
    ],
    decor: [
        {
            id: 'mirror-01',
            name: 'Decorative Wall Mirror',
            category: 'decor',
            subcategory: 'Mirrors',
            price: '₹15,000',
            image: 'images/products/Mirror 01/Gemini_Generated_Image_3kwmz73kwmz73kwm.png',
            gallery: [
                'images/products/Mirror 01/Gemini_Generated_Image_3kwmz73kwmz73kwm.png',
                'images/products/Mirror 01/Gemini_Generated_Image_7veyvv7veyvv7vey.png',
                'images/products/Mirror 01/Gemini_Generated_Image_e18k70e18k70e18k.png',
                'images/products/Mirror 01/Gemini_Generated_Image_wzew5vwzew5vwzew.png'
            ],
            description: 'Ornate wooden frame mirror perfect for adding elegance to any room.'
        },
        {
            id: 'mirror-02',
            name: 'Modern Round Mirror',
            category: 'decor',
            subcategory: 'Mirrors',
            price: '₹9,500',
            image: 'images/products/Mirror 02/Gemini_Generated_Image_d827mcd827mcd827.png',
            gallery: [
                'images/products/Mirror 02/Gemini_Generated_Image_d827mcd827mcd827.png',
                'images/products/Mirror 02/Gemini_Generated_Image_elrmcwelrmcwelrm.png',
                'images/products/Mirror 02/Gemini_Generated_Image_fnzwibfnzwibfnzw.png',
                'images/products/Mirror 02/Gemini_Generated_Image_qib5taqib5taqib5.png'
            ],
            description: 'Sleek round mirror with minimalist frame for contemporary homes.'
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
        image: 'images/products/Mirror 01/Gemini_Generated_Image_3kwmz73kwmz73kwm.png',
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
