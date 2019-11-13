const itemsHeatMap = [
  [-26.421875, 90.65625, "cups_ace"],
  [-94.9296875, 126.5546875, "cups_two"],
  [-105.671875, 37.3984375, "cups_three"],
  [-54.75, 157.515625, "cups_four"],
  [-72.3828125, 94.0625, "cups_five"],
  [-77.2578125, 86.1015625, "cups_six"],
  [-64.390625, 139.390625, "cups_seven"],
  [-21.734375, 102.3515625, "cups_eight"],
  [-77.9453125, 155.09375, "cups_nine"],
  [-81.40625, 131.453125, "cups_ten"],
  [-45.71875, 89.7890625, "cups_knight"],
  [-99.1171875, 131.8515625, "cups_page"],
  [-51.0703125, 134.0078125, "cups_queen"],
  [-84.78125, 133.5546875, "cups_king"],
  [-108.98, 27.25, "cups_ace"],
  [-36.234375, 119.1640625, "cups_two"],
  [-58.0859375, 99.09375, "cups_three"],
  [-84.796875, 133.9296875, "cups_four"],
  [-75.0546875, 140.7578125, "cups_five"],
  [-42.921875, 155.6328125, "cups_six"],
  [-74.0546875, 116.5859375, "cups_seven"],
  [-103.53125, 54.3671875, "cups_eight"],
  [-85.0625, 71.2578125, "cups_nine"],
  [-110.6484375, 56.0625, "cups_ten"],
  [-117.5546875, 30.359375, "cups_knight"],
  [-70.2890625, 149.9921875, "cups_page"],
  [-82.328125, 139.640625, "cups_queen"],
  [-83.6171875, 144.5703125, "cups_king"],
  [-29.65625, 157.7734375, "cups_ace"],
  [-56.2734375, 74.5078125, "cups_two"],
  [-57.4765625, 91.0390625, "cups_three"],
  [-105.734375, 57.9296875, "cups_four"],
  [-84.6796875, 99.0390625, "cups_five"],
  [-115.3203125, 24.4296875, "cups_six"],
  [-75.796875, 146.328125, "cups_seven"],
  [-50.90625, 150.2265625, "cups_eight"],
  [-105.140625, 89.3828125, "cups_nine"],
  [-50, 123.2265625, "cups_ten"],
  [-75.6640625, 151.171875, "cups_knight"],
  [-88.625, 80.375, "cups_page"],
  [-112.640625, 18.640625, "cups_queen"],
  [-33.9921875, 124.2265625, "cups_king"],
  [-68.75, 106.296875, "swords_ace"],
  [-85.6640625, 97.6796875, "swords_two"],
  [-64.890625, 84.484375, "swords_three"],
  [-84.5546875, 140.6171875, "swords_four"],
  [-91.859375, 124.9375, "swords_five"],
  [-44.625, 110.71875, "swords_six"],
  [-93.8984375, 92.6328125, "swords_seven"],
  [-81.8359375, 149.640625, "swords_eight"],
  [-101.1171875, 43.4609375, "swords_nine"],
  [-40.4921875, 108.8671875, "swords_ten"],
  [-109.453125, 25.46875, "swords_knight"],
  [-47.5859375, 100.859375, "swords_page"],
  [-31.03125, 149.328125, "swords_queen"],
  [-79.28125, 151.4375, "swords_king"],
  [-36.3984375, 104.859375, "swords_ace"],
  [-111.375, 43.515625, "swords_two"],
  [-100.8984375, 72.5390625, "swords_three"],
  [-75.59375, 88.3515625, "swords_four"],
  [-121.6796875, 20.4296875, "swords_five"],
  [-73.5390625, 144.7109375, "swords_six"],
  [-54.828125, 118.9296875, "swords_seven"],
  [-51.453125, 151.390625, "swords_eight"],
  [-86.46875, 151.6796875, "swords_nine"],
  [-45.078125, 142.1015625, "swords_ten"],
  [-84.9375, 131.9765625, "swords_knight"],
  [-59.03125, 140.7578125, "swords_page"],
  [-99.921875, 89.2265625, "swords_queen"],
  [-37.234375, 152.2734375, "swords_king"],
  [-92.6953125, 140.8046875, "swords_ace"],
  [-75.4140625, 146.8125, "swords_two"],
  [-52.765625, 105.890625, "swords_three"],
  [-55.90625, 157.484375, "swords_four"],
  [-70.40625, 83.09375, "swords_five"],
  [-59.140625, 133.8359375, "swords_six"],
  [-90.4296875, 82.34375, "swords_seven"],
  [-81.09375, 127.59375, "swords_eight"],
  [-42.1015625, 156.078125, "swords_nine"],
  [-59.015625, 149.265625, "swords_ten"],
  [-82.8203125, 157.03125, "swords_knight"],
  [-54.828125, 120.578125, "swords_page"],
  [-54.546875, 140.2734375, "swords_queen"],
  [-100.8359375, 25.0703125, "swords_king"],
  [-91.0234375, 127.2578125, "wands_ace"],
  [-81.328125, 133.4140625, "wands_two"],
  [-67.4296875, 77.3984375, "wands_three"],
  [-57.796875, 133.734375, "wands_four"],
  [-108.1171875, 59.71875, "wands_five"],
  [-69.2265625, 106.2109375, "wands_six"],
  [-72.140625, 145.3828125, "wands_seven"],
  [-55.5859375, 157.078125, "wands_eight"],
  [-70.828125, 122.640625, "wands_nine"],
  [-54.265625, 142.65625, "wands_ten"],
  [-37.375, 95.4609375, "wands_knight"],
  [-65.1875, 129.7265625, "wands_page"],
  [-73.109375, 143.765625, "wands_queen"],
  [-63.90625, 116.7890625, "wands_king"],
  [-28.1328125, 150.21875, "wands_ace"],
  [-109.296875, 24.03125, "wands_two"],
  [-50.6875, 107.7890625, "wands_three"],
  [-75.3203125, 146.296875, "wands_four"],
  [-48.3046875, 114.765625, "wands_five"],
  [-89.4609375, 80.5078125, "wands_six"],
  [-50.0546875, 106.890625, "wands_seven"],
  [-120.390625, 27.109375, "wands_eight"],
  [-41.6875, 153.65625, "wands_nine"],
  [-74.9453125, 135.8984375, "wands_ten"],
  [-80.6171875, 153.0390625, "wands_knight"],
  [-96.640625, 49.859375, "wands_page"],
  [-55.34375, 154.4921875, "wands_queen"],
  [-73.0703125, 82.8359375, "wands_king"],
  [-22.1640625, 102.9375, "wands_ace"],
  [-82.9296875, 100.5, "wands_two"],
  [-42.3671875, 158.3828125, "wands_three"],
  [-52.734375, 150.78125, "wands_four"],
  [-81.328125, 131.78125, "wands_five"],
  [-81.6484375, 154.6171875, "wands_six"],
  [-76.890625, 122.9765625, "wands_seven"],
  [-76.9296875, 143.4609375, "wands_eight"],
  [-71.0703125, 75.359375, "wands_nine"],
  [-83.8515625, 149.8671875, "wands_ten"],
  [-91.5859375, 127, "wands_knight"],
  [-41.7265625, 147.6796875, "wands_page"],
  [-110.296875, 51.578125, "wands_queen"],
  [-99.359375, 90.2421875, "wands_king"],
  [-113.0859375, 20.328125, "pentacles_ace"],
  [-104.125, 55.515625, "pentacles_two"],
  [-69.2265625, 83.9140625, "pentacles_three"],
  [-93.125, 78.828125, "pentacles_four"],
  [-36.7890625, 105.0546875, "pentacles_five"],
  [-53.234375, 119.0859375, "pentacles_six"],
  [-105.3359375, 89.1875, "pentacles_seven"],
  [-56.078125, 128.5625, "pentacles_eight"],
  [-75.5859375, 145.953125, "pentacles_nine"],
  [-59.2734375, 149.546875, "pentacles_ten"],
  [-52.7421875, 150.828125, "pentacles_knight"],
  [-37.390625, 148.3671875, "pentacles_page"],
  [-69.0390625, 83.1484375, "pentacles_queen"],
  [-70.890625, 138.875, "pentacles_king"],
  [-56.6875, 134.9140625, "pentacles_ace"],
  [-57.6875, 76.1640625, "pentacles_two"],
  [-55.859375, 156.9453125, "pentacles_three"],
  [-65.171875, 129.7109375, "pentacles_four"],
  [-70.4609375, 130.5234375, "pentacles_five"],
  [-121.6953125, 38.515625, "pentacles_six"],
  [-83.390625, 99.3828125, "pentacles_seven"],
  [-78.109375, 150.015625, "pentacles_eight"],
  [-42.9453125, 82.171875, "pentacles_nine"],
  [-112.828125, 51.1953125, "pentacles_ten"],
  [-87.5390625, 146.8671875, "pentacles_knight"],
  [-66.015625, 105.640625, "pentacles_page"],
  [-36.015625, 158.3046875, "pentacles_queen"],
  [-64.484375, 101.921875, "pentacles_king"],
  [-37.59375, 120.25, "pentacles_ace"],
  [-93.6015625, 124.9453125, "pentacles_two"],
  [-51.09375, 133.9296875, "pentacles_three"],
  [-83.625, 154.0625, "pentacles_four"],
  [-91.8125, 143.7578125, "pentacles_five"],
  [-83.5703125, 133.1796875, "pentacles_six"],
  [-85.765625, 139.765625, "pentacles_seven"],
  [-25.953125, 90.203125, "pentacles_eight"],
  [-42.7734375, 156.40625, "pentacles_nine"],
  [-77.2265625, 132.578125, "pentacles_ten"],
  [-33.3984375, 141.3515625, "pentacles_knight"],
  [-69.828125, 139, "pentacles_page"],
  [-108.3046875, 25.7421875, "pentacles_queen"],
  [-41.6953125, 153.9140625, "pentacles_king"],
  [-74.125, 139.9375, "coin_gold_quarter"],
  [-54.609375, 149.03125, "coin_draped_bust_silver_dollar"],
  [-83.828125, 84.8125, "coin_one_cent_token"],
  [-110.328125, 56.2578125, "coin_silver_dollar"],
  [-52.46875, 69.1015625, "coin_new_yorke_token"],
  [-32.0234375, 129.6640625, "coin_five_dollar_bechtler"],
  [-59.390625, 125.6484375, "coin_quarter"],
  [-84.5390625, 129.7734375, "coin_gold_dollar_coin"],
  [-39.8125, 160.03125, "coin_nickel_coin"],
  [-109.8359375, 27.140625, "coin_halfpenny"],
  [-56.65625, 112.53125, "coin_half_eagle"],
  [-97.296875, 85.71875, "coin_gold_eagle"],
  [-42.65625, 107.3671875, "coin_liberty_quarter"],
  [-71.4296875, 76.125, "coin_half_dime"],
  [-72.4453125, 129.859375, "coin_penny"],
  [-56.4375, 81.15625, "coin_gold_quarter"],
  [-113.6875, 61.53125, "coin_draped_bust_silver_dollar"],
  [-55, 120.609375, "coin_one_cent_token"],
  [-70.1171875, 150.0703125, "coin_silver_dollar"],
  [-52.8125, 148.359375, "coin_new_yorke_token"],
  [-78.2421875, 126.78125, "coin_five_dollar_bechtler"],
  [-48.1171875, 113.2421875, "coin_quarter"],
  [-45.1875, 89.6875, "coin_gold_dollar_coin"],
  [-72.65625, 83.5546875, "coin_nickel_coin"],
  [-105.0546875, 89.46875, "coin_halfpenny"],
  [-58.4765625, 134.1953125, "coin_half_eagle"],
  [-69.6015625, 131.015625, "coin_gold_eagle"],
  [-106.7265625, 31.0859375, "coin_liberty_quarter"],
  [-49.6640625, 99.765625, "coin_half_dime"],
  [-36.0546875, 155.859375, "coin_penny"],
  [-109.8515625, 70.15625, "coin_gold_quarter"],
  [-93.8359375, 144.0546875, "coin_draped_bust_silver_dollar"],
  [-38.0625, 118.0859375, "coin_one_cent_token"],
  [-61.625, 74.7890625, "coin_silver_dollar"],
  [-91.1953125, 133.2421875, "coin_new_yorke_token"],
  [-89.3984375, 95.2265625, "coin_five_dollar_bechtler"],
  [-36.4296875, 105.1640625, "coin_quarter"],
  [-113.21875, 45.5, "coin_gold_dollar_coin"],
  [-44.9765625, 150.625, "coin_nickel_coin"],
  [-53.2578125, 104.9375, "coin_halfpenny"],
  [-118.2890625, 14.4375, "coin_half_eagle"],
  [-66.1015625, 141.8125, "coin_gold_eagle"],
  [-64.7890625, 105.515625, "coin_liberty_quarter"],
  [-70, 114.265625, "coin_half_dime"],
  [-50.6796875, 136.7109375, "coin_penny"],
  [-74.46875, 154.7734375, "egg_spoonbill"],
  [-79.109375, 138.015625, "egg_heron"],
  [-77.6796875, 94.234375, "egg_loon"],
  [-68.8671875, 87.828125, "egg_eagle_1"],
  [-29.5703125, 80.9140625, "egg_eagle_2"],
  [-36.34375, 152.609375, "egg_vulture"],
  [-38.640625, 107.921875, "egg_hawk_1"],
  [-23.296875, 88.09375, "egg_hawk_2"],
  [-67.90625, 149.7578125, "egg_egret"],
  [-29.6328125, 154.1796875, "egg_duck"],
  [-95.890625, 136.9453125, "egg_goose_1"],
  [-85.75, 143.2421875, "egg_spoonbill"],
  [-71.0703125, 144.3984375, "egg_heron"],
  [-92.484375, 121.8515625, "egg_loon"],
  [-72.1953125, 76.7109375, "egg_eagle_1"],
  [-42.3125, 92.4453125, "egg_eagle_2"],
  [-99.1875, 66.0234375, "egg_vulture"],
  [-35.4921875, 137.4609375, "egg_hawk_1"],
  [-14.40625, 86.75, "egg_hawk_2"],
  [-90.3046875, 143.265625, "egg_egret"],
  [-40.1484375, 113.3046875, "egg_duck"],
  [-94.84375, 88.671875, "egg_goose_1"],
  [-73.4140625, 148.4765625, "egg_spoonbill"],
  [-76.9609375, 144.890625, "egg_heron"],
  [-70.8125, 100.3984375, "egg_loon"],
  [-64.7734375, 78.4609375, "egg_eagle_1"],
  [-39.828125, 96.0703125, "egg_eagle_2"],
  [-93.5078125, 79.4296875, "egg_vulture"],
  [-32.875, 123.8515625, "egg_hawk_1"],
  [-22.4296875, 95.1484375, "egg_hawk_2"],
  [-76.96875, 140.078125, "egg_egret"],
  [-48.3046875, 148.2890625, "egg_duck"],
  [-75.4296875, 114.015625, "egg_goose_1"],
  [-48.3359375, 114.8125, "bottle_tennesee_whiskey"],
  [-81.7109375, 153.0390625, "bottle_irish_whiskey"],
  [-79.1796875, 137.8203125, "bottle_scotch_whisky"],
  [-112.9296875, 51.796875, "bottle_absinthe"],
  [-61.4453125, 67.1640625, "bottle_gran_corazon_madeira"],
  [-85.0703125, 71.1328125, "bottle_old_tom_gin"],
  [-25.8125, 90.34375, "bottle_caribbean_rum"],
  [-55.3359375, 154.4453125, "bottle_cognac_bottle"],
  [-91, 126.84375, "bottle_london_dry_gin"],
  [-89.4375, 80.6484375, "bottle_tennesee_whiskey"],
  [-50.5390625, 73.109375, "bottle_irish_whiskey"],
  [-83.46875, 117.84375, "bottle_scotch_whisky"],
  [-80.046875, 153.2109375, "bottle_absinthe"],
  [-63.640625, 152.296875, "bottle_gran_corazon_madeira"],
  [-75.09375, 140.4921875, "bottle_old_tom_gin"],
  [-102.4921875, 46.3359375, "bottle_caribbean_rum"],
  [-88.5234375, 142.40625, "bottle_cognac_bottle"],
  [-49.78125, 117.484375, "bottle_london_dry_gin"],
  [-99, 131.796875, "bottle_tennesee_whiskey"],
  [-76.96875, 148.0859375, "bottle_irish_whiskey"],
  [-114.21875, 17.3515625, "bottle_scotch_whisky"],
  [-93.765625, 93.2421875, "bottle_absinthe"],
  [-33.40625, 141.4296875, "bottle_gran_corazon_madeira"],
  [-65.796875, 146, "bottle_old_tom_gin"],
  [-40.46875, 108.859375, "bottle_caribbean_rum"],
  [-66.0390625, 105.953125, "bottle_cognac_bottle"],
  [-56.8828125, 158.4140625, "bottle_london_dry_gin"],
  [-106.8515625, 80.078125, "arrowhead_rough"],
  [-29.6171875, 118.390625, "arrowhead_splintered"],
  [-78.109375, 130.171875, "arrowhead_crude"],
  [-94.875, 79.0546875, "arrowhead_chipped"],
  [-79.1875, 73.78125, "arrowhead_feldspar"],
  [-45.3671875, 130.6328125, "arrowhead_slate"],
  [-92.0625, 134.1328125, "arrowhead_bone"],
  [-68.2265625, 119.0390625, "arrowhead_raw"],
  [-67.65625, 66.296875, "arrowhead_obsidian"],
  [-106.4375, 23.078125, "arrowhead_quartz"],
  [-59.046875, 149.3984375, "arrowhead_flint"],
  [-58.1640625, 108.734375, "arrowhead_agate"],
  [-113.7265625, 38.0546875, "arrowhead_rough"],
  [-66.1796875, 108.6953125, "arrowhead_splintered"],
  [-76.4140625, 139.171875, "arrowhead_crude"],
  [-49.796875, 152.9765625, "arrowhead_chipped"],
  [-103.3984375, 90.703125, "arrowhead_feldspar"],
  [-62.3984375, 78.6484375, "arrowhead_slate"],
  [-120.796875, 63.1875, "arrowhead_bone"],
  [-86.9765625, 69.515625, "arrowhead_raw"],
  [-56.375, 128.9765625, "arrowhead_obsidian"],
  [-28.65625, 155.4765625, "arrowhead_quartz"],
  [-36.9765625, 116.3125, "arrowhead_flint"],
  [-85.9609375, 86.0078125, "arrowhead_agate"],
  [-44.7109375, 113.203125, "arrowhead_rough"],
  [-52.765625, 150.6640625, "arrowhead_splintered"],
  [-77.78125, 87.2109375, "arrowhead_crude"],
  [-122.0703125, 32.53125, "arrowhead_chipped"],
  [-96.046875, 53.265625, "arrowhead_feldspar"],
  [-95.2890625, 130, "arrowhead_slate"],
  [-75.3125, 116.453125, "arrowhead_bone"],
  [-64.046875, 128.1796875, "arrowhead_raw"],
  [-65.0703125, 71.1484375, "arrowhead_obsidian"],
  [-53.7421875, 85.703125, "arrowhead_quartz"],
  [-91.015625, 78.0078125, "arrowhead_flint"],
  [-34, 114.8828125, "arrowhead_agate"],
  [-83.5546875, 96.8046875, "heirlooms_jade_hairpin"],
  [-50.453125, 123.328125, "heirlooms_cherrywood_comb"],
  [-86.1484375, 99.546875, "heirlooms_ebony_hairbrush"],
  [-28.125, 150.7578125, "heirlooms_metal_hairpin"],
  [-92.9140625, 79.671875, "heirlooms_carved_wooden"],
  [-58.140625, 98.6640625, "heirlooms_boxwood_comb"],
  [-55.2421875, 157.0546875, "heirlooms_goat_hair_brush"],
  [-84.9375, 134.0703125, "heirlooms_ebony_hairpin"],
  [-82.46875, 149.734375, "heirlooms_ivory_hairpin"],
  [-42.9140625, 157.078125, "heirlooms_rosewood_hairbrush"],
  [-100.84375, 25.0859375, "heirlooms_tortoiseshell_comb"],
  [-68.7890625, 147.203125, "heirlooms_ivory_comb"],
  [-78.5546875, 152.59375, "heirlooms_horse_hair_brush"],
  [-121.71875, 20.421875, "heirlooms_boar_bristle_brush"],
  [-84.8984375, 131.921875, "heirlooms_new_guinea_rosewood"],
  [-61.265625, 144.40625, "heirlooms_jade_hairpin"],
  [-82.6640625, 152.21875, "heirlooms_cherrywood_comb"],
  [-82.625, 147.9375, "heirlooms_ebony_hairbrush"],
  [-105.0859375, 36, "heirlooms_metal_hairpin"],
  [-45.5859375, 72.0859375, "heirlooms_carved_wooden"],
  [-37.421875, 155.2578125, "heirlooms_boxwood_comb"],
  [-69.3203125, 83.03125, "heirlooms_goat_hair_brush"],
  [-28.75, 117.671875, "heirlooms_ebony_hairpin"],
  [-50.9609375, 134.0390625, "heirlooms_ivory_hairpin"],
  [-94.4296875, 128.6953125, "heirlooms_rosewood_hairbrush"],
  [-77.1640625, 132.5859375, "heirlooms_tortoiseshell_comb"],
  [-103.96875, 53.8671875, "heirlooms_ivory_comb"],
  [-84.0859375, 98.5078125, "heirlooms_horse_hair_brush"],
  [-50.3046875, 154.671875, "heirlooms_boar_bristle_brush"],
  [-51.703125, 106.3203125, "heirlooms_new_guinea_rosewood"],
  [-108.6484375, 40.1015625, "heirlooms_jade_hairpin"],
  [-91.015625, 127.0859375, "heirlooms_cherrywood_comb"],
  [-78.7734375, 128.9296875, "heirlooms_ebony_hairbrush"],
  [-67.328125, 155.984375, "heirlooms_metal_hairpin"],
  [-55.578125, 101.8203125, "heirlooms_carved_wooden"],
  [-51.78125, 106.234375, "heirlooms_boxwood_comb"],
  [-99.3984375, 90.328125, "heirlooms_goat_hair_brush"],
  [-80.6015625, 148.71875, "heirlooms_ebony_hairpin"],
  [-55.3515625, 154.375, "heirlooms_ivory_hairpin"],
  [-55.8984375, 128.59375, "heirlooms_rosewood_hairbrush"],
  [-70.140625, 150.0703125, "heirlooms_tortoiseshell_comb"],
  [-83.5, 97.90625, "heirlooms_ivory_comb"],
  [-29.53125, 157.703125, "heirlooms_horse_hair_brush"],
  [-101.109375, 43.4609375, "heirlooms_boar_bristle_brush"],
  [-84.671875, 138.8203125, "heirlooms_new_guinea_rosewood"],
  [-121.890625, 38.3046875, "flower_texas_bluebonnet"],
  [-56.25, 80.9375, "flower_bitterweed_1"],
  [-121.9296875, 35, "flower_agarita_1"],
  [-123.359375, 29.90625, "flower_agarita_2"],
  [-105.828125, 52.0078125, "flower_wild_rhubarb"],
  [-83.2890625, 145.8828125, "flower_cardinal"],
  [-72.1484375, 130.171875, "flower_creek_plum"],
  [-82.7578125, 145.34375, "flower_blood_flower_1"],
  [-76.2890625, 146.015625, "flower_blood_flower_2"],
  [-76.1875, 124.3125, "flower_chocolate_daisy"],
  [-81.0625, 83.65625, "flower_wisteria"],
  [-89.8359375, 94.96875, "flower_texas_bluebonnet"],
  [-64.8046875, 90.9453125, "flower_bitterweed_1"],
  [-104.484375, 67.171875, "flower_agarita_1"],
  [-116.734375, 58.71875, "flower_agarita_2"],
  [-102.96875, 75.875, "flower_wild_rhubarb"],
  [-94.8359375, 142.015625, "flower_cardinal"],
  [-97.8828125, 132.9921875, "flower_creek_plum"],
  [-73.21875, 146.125, "flower_blood_flower_1"],
  [-73.3046875, 142.796875, "flower_blood_flower_2"],
  [-84.8984375, 125.4140625, "flower_chocolate_daisy"],
  [-36.8046875, 150.4765625, "flower_wisteria"],
  [-108.609375, 23.671875, "flower_texas_bluebonnet"],
  [-66.375, 98.265625, "flower_bitterweed_1"],
  [-108.28125, 66.9921875, "flower_agarita_1"],
  [-119.1171875, 54.1484375, "flower_agarita_2"],
  [-101.3125, 54.09375, "flower_wild_rhubarb"],
  [-93.0546875, 143.1796875, "flower_cardinal"],
  [-78.1640625, 132.265625, "flower_creek_plum"],
  [-81.3671875, 141.734375, "flower_blood_flower_1"],
  [-69.046875, 144.578125, "flower_blood_flower_2"],
  [-78.1171875, 95.9765625, "flower_chocolate_daisy"],
  [-43.7890625, 146.5078125, "flower_wisteria"],
  [-52.4375, 151.1796875, "ring_harland_coral"],
  [-92.3828125, 140.75, "ring_magnate_turquoise"],
  [-32.578125, 149.859375, "ring_pilgrim_moonstone"],
  [-67.171875, 84.0546875, "ring_bonnard_pearl"],
  [-35.3359375, 122.8046875, "ring_banais_topaz"],
  [-55.953125, 89.8828125, "ring_beaulieux_diamond"],
  [-52.59375, 94.3125, "ring_yates_diamond"],
  [-54.21875, 76.5, "ring_aubrey_onyx"],
  [-84.65625, 94.203125, "ring_bosque_emerald"],
  [-50.40625, 102.046875, "ring_sackville_diamond"],
  [-119.03125, 55.625, "ring_thorburn_turquoise"],
  [-27.4453125, 82.453125, "ring_harland_coral"],
  [-113.4609375, 41.6015625, "ring_magnate_turquoise"],
  [-45.625, 130.71875, "ring_pilgrim_moonstone"],
  [-69.7265625, 131.6484375, "ring_bonnard_pearl"],
  [-94.1015625, 138.171875, "ring_banais_topaz"],
  [-45.6953125, 105.8359375, "ring_beaulieux_diamond"],
  [-52.4140625, 77.4765625, "ring_yates_diamond"],
  [-58.9375, 105.609375, "ring_aubrey_onyx"],
  [-40.8046875, 161.3359375, "ring_bosque_emerald"],
  [-37.5, 129.28125, "ring_sackville_diamond"],
  [-93.2890625, 91.96875, "ring_thorburn_turquoise"],
  [-57.4609375, 98.125, "ring_harland_coral"],
  [-43.5, 124.796875, "ring_magnate_turquoise"],
  [-31.3828125, 146.8984375, "ring_pilgrim_moonstone"],
  [-27.2265625, 156.6640625, "ring_bonnard_pearl"],
  [-92.203125, 136.1015625, "ring_banais_topaz"],
  [-92.9375, 79.0078125, "ring_beaulieux_diamond"],
  [-90.359375, 137.890625, "ring_yates_diamond"],
  [-84.1796875, 147.09375, "ring_aubrey_onyx"],
  [-82.171875, 140.6953125, "ring_bosque_emerald"],
  [-55.546875, 87.671875, "ring_sackville_diamond"],
  [-50.375, 123.40625, "ring_thorburn_turquoise"],
  [-50.515625, 92.9296875, "necklace_blakely_miniatue"],
  [-84.7734375, 85.8671875, "necklace_richelieu_amethyst"],
  [-58.84375, 116.3203125, "necklace_pelle_pearl"],
  [-75.0859375, 148.8046875, "necklace_ainsworth_cross"],
  [-46.09375, 134.328125, "necklace_braxton_amethyst"],
  [-90.375, 134.078125, "necklace_rou_pearl"],
  [-122.921875, 18.1796875, "necklace_gosselin_white_gold"],
  [-120.515625, 27.53125, "necklace_dane_topaz"],
  [-76.546875, 102.3046875, "necklace_tuamotu_pearl"],
  [-37.3515625, 148.421875, "necklace_blakely_miniatue"],
  [-44.375, 110.328125, "necklace_richelieu_amethyst"],
  [-97.21875, 129.0390625, "necklace_pelle_pearl"],
  [-63.265625, 122.328125, "necklace_ainsworth_cross"],
  [-46.6875, 147.4765625, "necklace_braxton_amethyst"],
  [-109.1171875, 84.125, "necklace_rou_pearl"],
  [-43.984375, 104.84375, "necklace_gosselin_white_gold"],
  [-62.3125, 107.0078125, "necklace_dane_topaz"],
  [-28.5, 124.9609375, "necklace_tuamotu_pearl"],
  [-56.359375, 137.859375, "necklace_blakely_miniatue"],
  [-71.0078125, 133.9375, "necklace_richelieu_amethyst"],
  [-57.03125, 152.8828125, "necklace_pelle_pearl"],
  [-38.25, 96.5625, "necklace_ainsworth_cross"],
  [-48.6796875, 120.9140625, "necklace_braxton_amethyst"],
  [-33.921875, 123.7890625, "necklace_rou_pearl"],
  [-32.640625, 153.109375, "necklace_gosselin_white_gold"],
  [-104.9765625, 53.9921875, "necklace_dane_topaz"],
  [-46.03125, 101.4921875, "necklace_tuamotu_pearl"],
  [-45.2421875, 122.9609375, "earring_ursula_citrine"],
  [-62.4296875, 94.9453125, "earring_royal_victoria"],
  [-47.7421875, 155.9296875, "earring_calumet_turquoise"],
  [-72.3984375, 99.609375, "earring_orchidee_diamond"],
  [-73.6640625, 132.8203125, "earring_sterling_tooth"],
  [-90.5390625, 89.578125, "earring_harford_garnet"],
  [-41.4140625, 121.953125, "earring_duchess_emerald"],
  [-68.1875, 125.0078125, "earring_beauchene_ruby"],
  [-41.03125, 133.7109375, "earring_endicott_diamond"],
  [-41.1328125, 146.734375, "earring_josephine_pearl"],
  [-108.8125, 28.296875, "earring_emmeline_coral"],
  [-70.140625, 139.15625, "earring_ursula_citrine"],
  [-61.4375, 140.4375, "earring_royal_victoria"],
  [-105.40625, 42.2109375, "earring_calumet_turquoise"],
  [-93.2265625, 142.1796875, "earring_orchidee_diamond"],
  [-43.6484375, 157.7109375, "earring_sterling_tooth"],
  [-32.2421875, 134.8359375, "earring_harford_garnet"],
  [-36.375, 149.0390625, "earring_duchess_emerald"],
  [-46.0625, 104.671875, "earring_beauchene_ruby"],
  [-55.9140625, 156.28125, "earring_endicott_diamond"],
  [-54.890625, 82.6484375, "earring_josephine_pearl"],
  [-85.3984375, 89.7578125, "earring_emmeline_coral"],
  [-87.5859375, 84.9765625, "earring_ursula_citrine"],
  [-89.4609375, 130.5, "earring_royal_victoria"],
  [-72.7109375, 143.625, "earring_calumet_turquoise"],
  [-36.703125, 108.765625, "earring_orchidee_diamond"],
  [-52.953125, 114.6875, "earring_sterling_tooth"],
  [-44.1796875, 156.5703125, "earring_harford_garnet"],
  [-107.953125, 21.1484375, "earring_duchess_emerald"],
  [-66.640625, 147.0859375, "earring_beauchene_ruby"],
  [-70.7734375, 66.609375, "earring_endicott_diamond"],
  [-78.984375, 145.5078125, "earring_josephine_pearl"],
  [-100.6484375, 80.3984375, "earring_emmeline_coral"],
  [-55.4453125, 101.78125, "bracelet_greco_sapphire"],
  [-49.8828125, 148.28125, "bracelet_abello_ruby_bangle"],
  [-116.625, 19.59375, "bracelet_ojeda_rose_gold"],
  [-92.109375, 60.0234375, "bracelet_helena_sapphire"],
  [-42.5, 109.8046875, "bracelet_durant_pearl"],
  [-107.1796875, 86.6796875, "bracelet_infanta_turquoise"],
  [-52.3515625, 87.0390625, "bracelet_elliston_carved"],
  [-54.0625, 97.9375, "bracelet_hajnal_garnet_bangle"],
  [-89.421875, 77.484375, "bracelet_greco_sapphire"],
  [-93.453125, 94.6640625, "bracelet_abello_ruby_bangle"],
  [-83.046875, 122.0859375, "bracelet_ojeda_rose_gold"],
  [-57.015625, 94.9453125, "bracelet_helena_sapphire"],
  [-76.8046875, 143.3125, "bracelet_durant_pearl"],
  [-35.2578125, 132.5, "bracelet_infanta_turquoise"],
  [-61.1640625, 143.78125, "bracelet_elliston_carved"],
  [-75.96875, 143.1875, "bracelet_hajnal_garnet_bangle"],
  [-46.7890625, 118.53125, "bracelet_greco_sapphire"],
  [-90.984375, 83.375, "bracelet_abello_ruby_bangle"],
  [-58.015625, 113.765625, "bracelet_ojeda_rose_gold"],
  [-49.7578125, 76.640625, "bracelet_helena_sapphire"],
  [-40.4375, 136.40625, "bracelet_durant_pearl"],
  [-78.90625, 133.0703125, "bracelet_infanta_turquoise"],
  [-107.96875, 59.3984375, "bracelet_elliston_carved"],
  [-78.0703125, 90.15625, "bracelet_hajnal_garnet_bangle"]
];

export default itemsHeatMap;