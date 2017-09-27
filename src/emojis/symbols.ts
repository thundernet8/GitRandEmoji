const symbols = [
    {
        emoji: "❤️",
        alias: ":heart:",
        name: "HEAVY BLACK HEART, VARIATION SELECTOR-16"
    },
    { emoji: "💛", alias: ":yellow_heart:", name: "YELLOW HEART" },
    { emoji: "💚", alias: ":green_heart:", name: "GREEN HEART" },
    { emoji: "💙", alias: ":blue_heart:", name: "BLUE HEART" },
    { emoji: "💜", alias: ":purple_heart:", name: "PURPLE HEART" },
    { emoji: "🖤", alias: ":black_heart:", name: "BLACK HEART" },
    { emoji: "💔", alias: ":broken_heart:", name: "BROKEN HEART" },
    {
        emoji: "❣️",
        alias: ":heavy_heart_exclamation:",
        name: "HEAVY HEART EXCLAMATION MARK ORNAMENT, VARIATION SELECTOR-16"
    },
    { emoji: "💕", alias: ":two_hearts:", name: "TWO HEARTS" },
    { emoji: "💞", alias: ":revolving_hearts:", name: "REVOLVING HEARTS" },
    { emoji: "💓", alias: ":heartbeat:", name: "BEATING HEART" },
    { emoji: "💗", alias: ":heartpulse:", name: "GROWING HEART" },
    { emoji: "💖", alias: ":sparkling_heart:", name: "SPARKLING HEART" },
    { emoji: "💘", alias: ":cupid:", name: "HEART WITH ARROW" },
    { emoji: "💝", alias: ":gift_heart:", name: "HEART WITH RIBBON" },
    { emoji: "💟", alias: ":heart_decoration:", name: "HEART DECORATION" },
    {
        emoji: "☮️",
        alias: ":peace_symbol:",
        name: "PEACE SYMBOL, VARIATION SELECTOR-16"
    },
    {
        emoji: "✝️",
        alias: ":latin_cross:",
        name: "LATIN CROSS, VARIATION SELECTOR-16"
    },
    {
        emoji: "☪️",
        alias: ":star_and_crescent:",
        name: "STAR AND CRESCENT, VARIATION SELECTOR-16"
    },
    { emoji: "🕉", alias: ":om:", name: "OM SYMBOL" },
    {
        emoji: "☸️",
        alias: ":wheel_of_dharma:",
        name: "WHEEL OF DHARMA, VARIATION SELECTOR-16"
    },
    {
        emoji: "✡️",
        alias: ":star_of_david:",
        name: "STAR OF DAVID, VARIATION SELECTOR-16"
    },
    {
        emoji: "🔯",
        alias: ":six_pointed_star:",
        name: "SIX POINTED STAR WITH MIDDLE DOT"
    },
    { emoji: "🕎", alias: ":menorah:", name: "MENORAH WITH NINE BRANCHES" },
    {
        emoji: "☯️",
        alias: ":yin_yang:",
        name: "YIN YANG, VARIATION SELECTOR-16"
    },
    {
        emoji: "☦️",
        alias: ":orthodox_cross:",
        name: "ORTHODOX CROSS, VARIATION SELECTOR-16"
    },
    { emoji: "🛐", alias: ":place_of_worship:", name: "PLACE OF WORSHIP" },
    { emoji: "⛎", alias: ":ophiuchus:", name: "OPHIUCHUS" },
    { emoji: "♈️", alias: ":aries:", name: "ARIES, VARIATION SELECTOR-16" },
    { emoji: "♉️", alias: ":taurus:", name: "TAURUS, VARIATION SELECTOR-16" },
    { emoji: "♊️", alias: ":gemini:", name: "GEMINI, VARIATION SELECTOR-16" },
    { emoji: "♋️", alias: ":cancer:", name: "CANCER, VARIATION SELECTOR-16" },
    { emoji: "♌️", alias: ":leo:", name: "LEO, VARIATION SELECTOR-16" },
    { emoji: "♍️", alias: ":virgo:", name: "VIRGO, VARIATION SELECTOR-16" },
    { emoji: "♎️", alias: ":libra:", name: "LIBRA, VARIATION SELECTOR-16" },
    {
        emoji: "♏️",
        alias: ":scorpius:",
        name: "SCORPIUS, VARIATION SELECTOR-16"
    },
    {
        emoji: "♐️",
        alias: ":sagittarius:",
        name: "SAGITTARIUS, VARIATION SELECTOR-16"
    },
    {
        emoji: "♑️",
        alias: ":capricorn:",
        name: "CAPRICORN, VARIATION SELECTOR-16"
    },
    {
        emoji: "♒️",
        alias: ":aquarius:",
        name: "AQUARIUS, VARIATION SELECTOR-16"
    },
    { emoji: "♓️", alias: ":pisces:", name: "PISCES, VARIATION SELECTOR-16" },
    { emoji: "🆔", alias: ":id:", name: "SQUARED ID" },
    {
        emoji: "⚛️",
        alias: ":atom_symbol:",
        name: "ATOM SYMBOL, VARIATION SELECTOR-16"
    },
    { emoji: "🉑", alias: ":accept:", name: "CIRCLED IDEOGRAPH ACCEPT" },
    {
        emoji: "☢️",
        alias: ":radioactive:",
        name: "RADIOACTIVE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "☣️",
        alias: ":biohazard:",
        name: "BIOHAZARD SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "📴", alias: ":mobile_phone_off:", name: "MOBILE PHONE OFF" },
    { emoji: "📳", alias: ":vibration_mode:", name: "VIBRATION MODE" },
    {
        emoji: "🈶",
        alias: ":u6709:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-6709"
    },
    {
        emoji: "🈚️",
        alias: ":u7121:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-7121, VARIATION SELECTOR-16"
    },
    {
        emoji: "🈸",
        alias: ":u7533:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-7533"
    },
    {
        emoji: "🈺",
        alias: ":u55b6:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-55B6"
    },
    {
        emoji: "🈷️",
        alias: ":u6708:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-6708, VARIATION SELECTOR-16"
    },
    {
        emoji: "✴️",
        alias: ":eight_pointed_black_star:",
        name: "EIGHT POINTED BLACK STAR, VARIATION SELECTOR-16"
    },
    { emoji: "🆚", alias: ":vs:", name: "SQUARED VS" },
    { emoji: "💮", alias: ":white_flower:", name: "WHITE FLOWER" },
    {
        emoji: "🉐",
        alias: ":ideograph_advantage:",
        name: "CIRCLED IDEOGRAPH ADVANTAGE"
    },
    {
        emoji: "㊙️",
        alias: ":secret:",
        name: "CIRCLED IDEOGRAPH SECRET, VARIATION SELECTOR-16"
    },
    {
        emoji: "㊗️",
        alias: ":congratulations:",
        name: "CIRCLED IDEOGRAPH CONGRATULATION, VARIATION SELECTOR-16"
    },
    {
        emoji: "🈴",
        alias: ":u5408:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-5408"
    },
    {
        emoji: "🈵",
        alias: ":u6e80:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-6E80"
    },
    {
        emoji: "🈹",
        alias: ":u5272:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-5272"
    },
    {
        emoji: "🈲",
        alias: ":u7981:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-7981"
    },
    {
        emoji: "🅰️",
        alias: ":a:",
        name: "NEGATIVE SQUARED LATIN CAPITAL LETTER A, VARIATION SELECTOR-16"
    },
    {
        emoji: "🅱️",
        alias: ":b:",
        name: "NEGATIVE SQUARED LATIN CAPITAL LETTER B, VARIATION SELECTOR-16"
    },
    { emoji: "🆎", alias: ":ab:", name: "NEGATIVE SQUARED AB" },
    { emoji: "🆑", alias: ":cl:", name: "SQUARED CL" },
    {
        emoji: "🅾️",
        alias: ":o2:",
        name: "NEGATIVE SQUARED LATIN CAPITAL LETTER O, VARIATION SELECTOR-16"
    },
    { emoji: "🆘", alias: ":sos:", name: "SQUARED SOS" },
    { emoji: "❌", alias: ":x:", name: "CROSS MARK" },
    {
        emoji: "⭕️",
        alias: ":o:",
        name: "HEAVY LARGE CIRCLE, VARIATION SELECTOR-16"
    },
    { emoji: "🛑", alias: ":stop_sign:", name: "OCTAGONAL SIGN" },
    {
        emoji: "⛔️",
        alias: ":no_entry:",
        name: "NO ENTRY, VARIATION SELECTOR-16"
    },
    { emoji: "📛", alias: ":name_badge:", name: "NAME BADGE" },
    { emoji: "🚫", alias: ":no_entry_sign:", name: "NO ENTRY SIGN" },
    { emoji: "💯", alias: ":100:", name: "HUNDRED POINTS SYMBOL" },
    { emoji: "💢", alias: ":anger:", name: "ANGER SYMBOL" },
    {
        emoji: "♨️",
        alias: ":hotsprings:",
        name: "HOT SPRINGS, VARIATION SELECTOR-16"
    },
    { emoji: "🚷", alias: ":no_pedestrians:", name: "NO PEDESTRIANS" },
    { emoji: "🚯", alias: ":do_not_litter:", name: "DO NOT LITTER SYMBOL" },
    { emoji: "🚳", alias: ":no_bicycles:", name: "NO BICYCLES" },
    {
        emoji: "🚱",
        alias: ":non-potable_water:",
        name: "NON-POTABLE WATER SYMBOL"
    },
    { emoji: "🔞", alias: ":underage:", name: "NO ONE UNDER EIGHTEEN SYMBOL" },
    { emoji: "📵", alias: ":no_mobile_phones:", name: "NO MOBILE PHONES" },
    { emoji: "🚭", alias: ":no_smoking:", name: "NO SMOKING SYMBOL" },
    {
        emoji: "❗️",
        alias: ":exclamation:",
        name: "HEAVY EXCLAMATION MARK SYMBOL, VARIATION SELECTOR-16"
    },
    {
        emoji: "❕",
        alias: ":grey_exclamation:",
        name: "WHITE EXCLAMATION MARK ORNAMENT"
    },
    { emoji: "❓", alias: ":question:", name: "BLACK QUESTION MARK ORNAMENT" },
    {
        emoji: "❔",
        alias: ":grey_question:",
        name: "WHITE QUESTION MARK ORNAMENT"
    },
    {
        emoji: "‼️",
        alias: ":bangbang:",
        name: "DOUBLE EXCLAMATION MARK, VARIATION SELECTOR-16"
    },
    {
        emoji: "⁉️",
        alias: ":interrobang:",
        name: "EXCLAMATION QUESTION MARK, VARIATION SELECTOR-16"
    },
    { emoji: "🔅", alias: ":low_brightness:", name: "LOW BRIGHTNESS SYMBOL" },
    { emoji: "🔆", alias: ":high_brightness:", name: "HIGH BRIGHTNESS SYMBOL" },
    {
        emoji: "〽️",
        alias: ":part_alternation_mark:",
        name: "PART ALTERNATION MARK, VARIATION SELECTOR-16"
    },
    {
        emoji: "⚠️",
        alias: ":warning:",
        name: "WARNING SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "🚸", alias: ":children_crossing:", name: "CHILDREN CROSSING" },
    { emoji: "🔱", alias: ":trident:", name: "TRIDENT EMBLEM" },
    {
        emoji: "⚜️",
        alias: ":fleur_de_lis:",
        name: "FLEUR-DE-LIS, VARIATION SELECTOR-16"
    },
    { emoji: "🔰", alias: ":beginner:", name: "JAPANESE SYMBOL FOR BEGINNER" },
    {
        emoji: "♻️",
        alias: ":recycle:",
        name: "BLACK UNIVERSAL RECYCLING SYMBOL, VARIATION SELECTOR-16"
    },
    { emoji: "✅", alias: ":white_check_mark:", name: "WHITE HEAVY CHECK MARK" },
    {
        emoji: "🈯️",
        alias: ":u6307:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-6307, VARIATION SELECTOR-16"
    },
    {
        emoji: "💹",
        alias: ":chart:",
        name: "CHART WITH UPWARDS TREND AND YEN SIGN"
    },
    { emoji: "❇️", alias: ":sparkle:", name: "SPARKLE, VARIATION SELECTOR-16" },
    {
        emoji: "✳️",
        alias: ":eight_spoked_asterisk:",
        name: "EIGHT SPOKED ASTERISK, VARIATION SELECTOR-16"
    },
    {
        emoji: "❎",
        alias: ":negative_squared_cross_mark:",
        name: "NEGATIVE SQUARED CROSS MARK"
    },
    {
        emoji: "🌐",
        alias: ":globe_with_meridians:",
        name: "GLOBE WITH MERIDIANS"
    },
    {
        emoji: "💠",
        alias: ":diamond_shape_with_a_dot_inside:",
        name: "DIAMOND SHAPE WITH A DOT INSIDE"
    },
    {
        emoji: "Ⓜ️",
        alias: ":m:",
        name: "CIRCLED LATIN CAPITAL LETTER M, VARIATION SELECTOR-16"
    },
    { emoji: "🌀", alias: ":cyclone:", name: "CYCLONE" },
    { emoji: "💤", alias: ":zzz:", name: "SLEEPING SYMBOL" },
    { emoji: "🏧", alias: ":atm:", name: "AUTOMATED TELLER MACHINE" },
    { emoji: "🚾", alias: ":wc:", name: "WATER CLOSET" },
    {
        emoji: "♿️",
        alias: ":wheelchair:",
        name: "WHEELCHAIR SYMBOL, VARIATION SELECTOR-16"
    },
    {
        emoji: "🅿️",
        alias: ":parking:",
        name: "NEGATIVE SQUARED LATIN CAPITAL LETTER P, VARIATION SELECTOR-16"
    },
    {
        emoji: "🈳",
        alias: ":u7a7a:",
        name: "SQUARED CJK UNIFIED IDEOGRAPH-7A7A"
    },
    {
        emoji: "🈂️",
        alias: ":sa:",
        name: "SQUARED KATAKANA SA, VARIATION SELECTOR-16"
    },
    { emoji: "🛂", alias: ":passport_control:", name: "PASSPORT CONTROL" },
    { emoji: "🛃", alias: ":customs:", name: "CUSTOMS" },
    { emoji: "🛄", alias: ":baggage_claim:", name: "BAGGAGE CLAIM" },
    { emoji: "🛅", alias: ":left_luggage:", name: "LEFT LUGGAGE" },
    { emoji: "🚹", alias: ":mens:", name: "MENS SYMBOL" },
    { emoji: "🚺", alias: ":womens:", name: "WOMENS SYMBOL" },
    { emoji: "🚼", alias: ":baby_symbol:", name: "BABY SYMBOL" },
    { emoji: "🚻", alias: ":restroom:", name: "RESTROOM" },
    {
        emoji: "🚮",
        alias: ":put_litter_in_its_place:",
        name: "PUT LITTER IN ITS PLACE SYMBOL"
    },
    { emoji: "🎦", alias: ":cinema:", name: "CINEMA" },
    { emoji: "📶", alias: ":signal_strength:", name: "ANTENNA WITH BARS" },
    { emoji: "🈁", alias: ":koko:", name: "SQUARED KATAKANA KOKO" },
    { emoji: "🔣", alias: ":symbols:", name: "INPUT SYMBOL FOR SYMBOLS" },
    {
        emoji: "ℹ️",
        alias: ":information_source:",
        name: "INFORMATION SOURCE, VARIATION SELECTOR-16"
    },
    { emoji: "🔤", alias: ":abc:", name: "INPUT SYMBOL FOR LATIN LETTERS" },
    {
        emoji: "🔡",
        alias: ":abcd:",
        name: "INPUT SYMBOL FOR LATIN SMALL LETTERS"
    },
    {
        emoji: "🔠",
        alias: ":capital_abcd:",
        name: "INPUT SYMBOL FOR LATIN CAPITAL LETTERS"
    },
    { emoji: "🆖", alias: ":ng:", name: "SQUARED NG" },
    { emoji: "🆗", alias: ":ok:", name: "SQUARED OK" },
    { emoji: "🆙", alias: ":up:", name: "SQUARED UP WITH EXCLAMATION MARK" },
    { emoji: "🆒", alias: ":cool:", name: "SQUARED COOL" },
    { emoji: "🆕", alias: ":new:", name: "SQUARED NEW" },
    { emoji: "🆓", alias: ":free:", name: "SQUARED FREE" },
    {
        emoji: "0️⃣",
        alias: ":zero:",
        name: "0, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "1️⃣",
        alias: ":one:",
        name: "1, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "2️⃣",
        alias: ":two:",
        name: "2, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "3️⃣",
        alias: ":three:",
        name: "3, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "4️⃣",
        alias: ":four:",
        name: "4, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "5️⃣",
        alias: ":five:",
        name: "5, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "6️⃣",
        alias: ":six:",
        name: "6, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "7️⃣",
        alias: ":seven:",
        name: "7, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "8️⃣",
        alias: ":eight:",
        name: "8, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "9️⃣",
        alias: ":nine:",
        name: "9, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    { emoji: "🔟", alias: ":keycap_ten:", name: "KEYCAP TEN" },
    { emoji: "🔢", alias: ":1234:", name: "INPUT SYMBOL FOR NUMBERS" },
    {
        emoji: "#️⃣",
        alias: ":hash:",
        name: "#, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "*️⃣",
        alias: ":asterisk:",
        name: "*, VARIATION SELECTOR-16, COMBINING ENCLOSING KEYCAP"
    },
    {
        emoji: "▶️",
        alias: ":arrow_forward:",
        name: "BLACK RIGHT-POINTING TRIANGLE, VARIATION SELECTOR-16"
    },
    { emoji: "⏸", alias: ":pause_button:", name: "DOUBLE VERTICAL BAR" },
    {
        emoji: "⏯",
        alias: ":play_or_pause_button:",
        name: "BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR"
    },
    { emoji: "⏹", alias: ":stop_button:", name: "BLACK SQUARE FOR STOP" },
    { emoji: "⏺", alias: ":record_button:", name: "BLACK CIRCLE FOR RECORD" },
    {
        emoji: "⏭",
        alias: ":next_track_button:",
        name: "BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR"
    },
    {
        emoji: "⏮",
        alias: ":previous_track_button:",
        name: "BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR"
    },
    {
        emoji: "⏩",
        alias: ":fast_forward:",
        name: "BLACK RIGHT-POINTING DOUBLE TRIANGLE"
    },
    {
        emoji: "⏪",
        alias: ":rewind:",
        name: "BLACK LEFT-POINTING DOUBLE TRIANGLE"
    },
    {
        emoji: "⏫",
        alias: ":arrow_double_up:",
        name: "BLACK UP-POINTING DOUBLE TRIANGLE"
    },
    {
        emoji: "⏬",
        alias: ":arrow_double_down:",
        name: "BLACK DOWN-POINTING DOUBLE TRIANGLE"
    },
    {
        emoji: "◀️",
        alias: ":arrow_backward:",
        name: "BLACK LEFT-POINTING TRIANGLE, VARIATION SELECTOR-16"
    },
    {
        emoji: "🔼",
        alias: ":arrow_up_small:",
        name: "UP-POINTING SMALL RED TRIANGLE"
    },
    {
        emoji: "🔽",
        alias: ":arrow_down_small:",
        name: "DOWN-POINTING SMALL RED TRIANGLE"
    },
    {
        emoji: "➡️",
        alias: ":arrow_right:",
        name: "BLACK RIGHTWARDS ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "⬅️",
        alias: ":arrow_left:",
        name: "LEFTWARDS BLACK ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "⬆️",
        alias: ":arrow_up:",
        name: "UPWARDS BLACK ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "⬇️",
        alias: ":arrow_down:",
        name: "DOWNWARDS BLACK ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "↗️",
        alias: ":arrow_upper_right:",
        name: "NORTH EAST ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "↘️",
        alias: ":arrow_lower_right:",
        name: "SOUTH EAST ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "↙️",
        alias: ":arrow_lower_left:",
        name: "SOUTH WEST ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "↖️",
        alias: ":arrow_upper_left:",
        name: "NORTH WEST ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "↕️",
        alias: ":arrow_up_down:",
        name: "UP DOWN ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "↔️",
        alias: ":left_right_arrow:",
        name: "LEFT RIGHT ARROW, VARIATION SELECTOR-16"
    },
    {
        emoji: "↪️",
        alias: ":arrow_right_hook:",
        name: "RIGHTWARDS ARROW WITH HOOK, VARIATION SELECTOR-16"
    },
    {
        emoji: "↩️",
        alias: ":leftwards_arrow_with_hook:",
        name: "LEFTWARDS ARROW WITH HOOK, VARIATION SELECTOR-16"
    },
    {
        emoji: "⤴️",
        alias: ":arrow_heading_up:",
        name:
            "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS, VARIATION SELECTOR-16"
    },
    {
        emoji: "⤵️",
        alias: ":arrow_heading_down:",
        name:
            "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS, VARIATION SELECTOR-16"
    },
    {
        emoji: "🔀",
        alias: ":twisted_rightwards_arrows:",
        name: "TWISTED RIGHTWARDS ARROWS"
    },
    {
        emoji: "🔁",
        alias: ":repeat:",
        name: "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS"
    },
    {
        emoji: "🔂",
        alias: ":repeat_one:",
        name:
            "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY"
    },
    {
        emoji: "🔄",
        alias: ":arrows_counterclockwise:",
        name: "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"
    },
    {
        emoji: "🔃",
        alias: ":arrows_clockwise:",
        name: "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"
    },
    { emoji: "🎵", alias: ":musical_note:", name: "MUSICAL NOTE" },
    { emoji: "🎶", alias: ":notes:", name: "MULTIPLE MUSICAL NOTES" },
    { emoji: "➕", alias: ":heavy_plus_sign:", name: "HEAVY PLUS SIGN" },
    { emoji: "➖", alias: ":heavy_minus_sign:", name: "HEAVY MINUS SIGN" },
    { emoji: "➗", alias: ":heavy_division_sign:", name: "HEAVY DIVISION SIGN" },
    {
        emoji: "✖️",
        alias: ":heavy_multiplication_x:",
        name: "HEAVY MULTIPLICATION X, VARIATION SELECTOR-16"
    },
    { emoji: "💲", alias: ":heavy_dollar_sign:", name: "HEAVY DOLLAR SIGN" },
    { emoji: "💱", alias: ":currency_exchange:", name: "CURRENCY EXCHANGE" },
    {
        emoji: "™️",
        alias: ":tm:",
        name: "TRADE MARK SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "©️",
        alias: ":copyright:",
        name: "COPYRIGHT SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "®️",
        alias: ":registered:",
        name: "REGISTERED SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "〰️",
        alias: ":wavy_dash:",
        name: "WAVY DASH, VARIATION SELECTOR-16"
    },
    { emoji: "➰", alias: ":curly_loop:", name: "CURLY LOOP" },
    { emoji: "➿", alias: ":loop:", name: "DOUBLE CURLY LOOP" },
    { emoji: "🔚", alias: ":end:", name: "END WITH LEFTWARDS ARROW ABOVE" },
    { emoji: "🔙", alias: ":back:", name: "BACK WITH LEFTWARDS ARROW ABOVE" },
    {
        emoji: "🔛",
        alias: ":on:",
        name: "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE"
    },
    { emoji: "🔝", alias: ":top:", name: "TOP WITH UPWARDS ARROW ABOVE" },
    { emoji: "🔜", alias: ":soon:", name: "SOON WITH RIGHTWARDS ARROW ABOVE" },
    {
        emoji: "✔️",
        alias: ":heavy_check_mark:",
        name: "HEAVY CHECK MARK, VARIATION SELECTOR-16"
    },
    {
        emoji: "☑️",
        alias: ":ballot_box_with_check:",
        name: "BALLOT BOX WITH CHECK, VARIATION SELECTOR-16"
    },
    { emoji: "🔘", alias: ":radio_button:", name: "RADIO BUTTON" },
    {
        emoji: "⚪️",
        alias: ":white_circle:",
        name: "MEDIUM WHITE CIRCLE, VARIATION SELECTOR-16"
    },
    {
        emoji: "⚫️",
        alias: ":black_circle:",
        name: "MEDIUM BLACK CIRCLE, VARIATION SELECTOR-16"
    },
    { emoji: "🔴", alias: ":red_circle:", name: "LARGE RED CIRCLE" },
    { emoji: "🔵", alias: ":large_blue_circle:", name: "LARGE BLUE CIRCLE" },
    {
        emoji: "🔺",
        alias: ":small_red_triangle:",
        name: "UP-POINTING RED TRIANGLE"
    },
    {
        emoji: "🔻",
        alias: ":small_red_triangle_down:",
        name: "DOWN-POINTING RED TRIANGLE"
    },
    {
        emoji: "🔸",
        alias: ":small_orange_diamond:",
        name: "SMALL ORANGE DIAMOND"
    },
    { emoji: "🔹", alias: ":small_blue_diamond:", name: "SMALL BLUE DIAMOND" },
    {
        emoji: "🔶",
        alias: ":large_orange_diamond:",
        name: "LARGE ORANGE DIAMOND"
    },
    { emoji: "🔷", alias: ":large_blue_diamond:", name: "LARGE BLUE DIAMOND" },
    {
        emoji: "🔳",
        alias: ":white_square_button:",
        name: "WHITE SQUARE BUTTON"
    },
    {
        emoji: "🔲",
        alias: ":black_square_button:",
        name: "BLACK SQUARE BUTTON"
    },
    {
        emoji: "▪️",
        alias: ":black_small_square:",
        name: "BLACK SMALL SQUARE, VARIATION SELECTOR-16"
    },
    {
        emoji: "▫️",
        alias: ":white_small_square:",
        name: "WHITE SMALL SQUARE, VARIATION SELECTOR-16"
    },
    {
        emoji: "◾️",
        alias: ":black_medium_small_square:",
        name: "BLACK MEDIUM SMALL SQUARE, VARIATION SELECTOR-16"
    },
    {
        emoji: "◽️",
        alias: ":white_medium_small_square:",
        name: "WHITE MEDIUM SMALL SQUARE, VARIATION SELECTOR-16"
    },
    {
        emoji: "◼️",
        alias: ":black_medium_square:",
        name: "BLACK MEDIUM SQUARE, VARIATION SELECTOR-16"
    },
    {
        emoji: "◻️",
        alias: ":white_medium_square:",
        name: "WHITE MEDIUM SQUARE, VARIATION SELECTOR-16"
    },
    {
        emoji: "⬛️",
        alias: ":black_large_square:",
        name: "BLACK LARGE SQUARE, VARIATION SELECTOR-16"
    },
    {
        emoji: "⬜️",
        alias: ":white_large_square:",
        name: "WHITE LARGE SQUARE, VARIATION SELECTOR-16"
    },
    { emoji: "🔈", alias: ":speaker:", name: "SPEAKER" },
    { emoji: "🔇", alias: ":mute:", name: "SPEAKER WITH CANCELLATION STROKE" },
    { emoji: "🔉", alias: ":sound:", name: "SPEAKER WITH ONE SOUND WAVE" },
    {
        emoji: "🔊",
        alias: ":loud_sound:",
        name: "SPEAKER WITH THREE SOUND WAVES"
    },
    { emoji: "🔔", alias: ":bell:", name: "BELL" },
    { emoji: "🔕", alias: ":no_bell:", name: "BELL WITH CANCELLATION STROKE" },
    { emoji: "📣", alias: ":mega:", name: "CHEERING MEGAPHONE" },
    { emoji: "📢", alias: ":loudspeaker:", name: "PUBLIC ADDRESS LOUDSPEAKER" },
    {
        emoji: "👁‍🗨",
        alias: ":eye_speech_bubble:",
        name: "EYE, ZERO WIDTH JOINER, LEFT SPEECH BUBBLE"
    },
    { emoji: "💬", alias: ":speech_balloon:", name: "SPEECH BALLOON" },
    { emoji: "💭", alias: ":thought_balloon:", name: "THOUGHT BALLOON" },
    { emoji: "🗯", alias: ":right_anger_bubble:", name: "RIGHT ANGER BUBBLE" },
    {
        emoji: "♠️",
        alias: ":spades:",
        name: "BLACK SPADE SUIT, VARIATION SELECTOR-16"
    },
    {
        emoji: "♣️",
        alias: ":clubs:",
        name: "BLACK CLUB SUIT, VARIATION SELECTOR-16"
    },
    {
        emoji: "♥️",
        alias: ":hearts:",
        name: "BLACK HEART SUIT, VARIATION SELECTOR-16"
    },
    {
        emoji: "♦️",
        alias: ":diamonds:",
        name: "BLACK DIAMOND SUIT, VARIATION SELECTOR-16"
    },
    { emoji: "🃏", alias: ":black_joker:", name: "PLAYING CARD BLACK JOKER" },
    {
        emoji: "🎴",
        alias: ":flower_playing_cards:",
        name: "FLOWER PLAYING CARDS"
    },
    {
        emoji: "🀄️",
        alias: ":mahjong:",
        name: "MAHJONG TILE RED DRAGON, VARIATION SELECTOR-16"
    },
    { emoji: "🕐", alias: ":clock1:", name: "CLOCK FACE ONE OCLOCK" },
    { emoji: "🕑", alias: ":clock2:", name: "CLOCK FACE TWO OCLOCK" },
    { emoji: "🕒", alias: ":clock3:", name: "CLOCK FACE THREE OCLOCK" },
    { emoji: "🕓", alias: ":clock4:", name: "CLOCK FACE FOUR OCLOCK" },
    { emoji: "🕔", alias: ":clock5:", name: "CLOCK FACE FIVE OCLOCK" },
    { emoji: "🕕", alias: ":clock6:", name: "CLOCK FACE SIX OCLOCK" },
    { emoji: "🕖", alias: ":clock7:", name: "CLOCK FACE SEVEN OCLOCK" },
    { emoji: "🕗", alias: ":clock8:", name: "CLOCK FACE EIGHT OCLOCK" },
    { emoji: "🕘", alias: ":clock9:", name: "CLOCK FACE NINE OCLOCK" },
    { emoji: "🕙", alias: ":clock10:", name: "CLOCK FACE TEN OCLOCK" },
    { emoji: "🕚", alias: ":clock11:", name: "CLOCK FACE ELEVEN OCLOCK" },
    { emoji: "🕛", alias: ":clock12:", name: "CLOCK FACE TWELVE OCLOCK" },
    { emoji: "🕜", alias: ":clock130:", name: "CLOCK FACE ONE-THIRTY" },
    { emoji: "🕝", alias: ":clock230:", name: "CLOCK FACE TWO-THIRTY" },
    { emoji: "🕞", alias: ":clock330:", name: "CLOCK FACE THREE-THIRTY" },
    { emoji: "🕟", alias: ":clock430:", name: "CLOCK FACE FOUR-THIRTY" },
    { emoji: "🕠", alias: ":clock530:", name: "CLOCK FACE FIVE-THIRTY" },
    { emoji: "🕡", alias: ":clock630:", name: "CLOCK FACE SIX-THIRTY" },
    { emoji: "🕢", alias: ":clock730:", name: "CLOCK FACE SEVEN-THIRTY" },
    { emoji: "🕣", alias: ":clock830:", name: "CLOCK FACE EIGHT-THIRTY" },
    { emoji: "🕤", alias: ":clock930:", name: "CLOCK FACE NINE-THIRTY" },
    { emoji: "🕥", alias: ":clock1030:", name: "CLOCK FACE TEN-THIRTY" },
    { emoji: "🕦", alias: ":clock1130:", name: "CLOCK FACE ELEVEN-THIRTY" },
    { emoji: "🕧", alias: ":clock1230:", name: "CLOCK FACE TWELVE-THIRTY" }
];

export default symbols;
