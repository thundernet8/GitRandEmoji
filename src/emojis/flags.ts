const flags = [
    {
        emoji: "🏳️",
        alias: ":white_flag:",
        name: "WAVING WHITE FLAG, VARIATION SELECTOR-16"
    },
    { emoji: "🏴", alias: ":black_flag:", name: "WAVING BLACK FLAG" },
    { emoji: "🏁", alias: ":checkered_flag:", name: "CHEQUERED FLAG" },
    {
        emoji: "🚩",
        alias: ":triangular_flag_on_post:",
        name: "TRIANGULAR FLAG ON POST"
    },
    {
        emoji: "🏳️‍🌈",
        alias: ":rainbow_flag:",
        name:
            "WAVING WHITE FLAG, VARIATION SELECTOR-16, ZERO WIDTH JOINER, RAINBOW"
    },
    {
        emoji: "🇦🇫",
        alias: ":afghanistan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇦🇽",
        alias: ":aland_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER X"
    },
    {
        emoji: "🇦🇱",
        alias: ":albania:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇩🇿",
        alias: ":algeria:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇦🇸",
        alias: ":american_samoa:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇦🇩",
        alias: ":andorra:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇦🇴",
        alias: ":angola:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇦🇮",
        alias: ":anguilla:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇦🇶",
        alias: ":antarctica:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER Q"
    },
    {
        emoji: "🇦🇬",
        alias: ":antigua_barbuda:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇦🇷",
        alias: ":argentina:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇦🇲",
        alias: ":armenia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇦🇼",
        alias: ":aruba:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇦🇺",
        alias: ":australia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇦🇹",
        alias: ":austria:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇦🇿",
        alias: ":azerbaijan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇧🇸",
        alias: ":bahamas:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇧🇭",
        alias: ":bahrain:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇧🇩",
        alias: ":bangladesh:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇧🇧",
        alias: ":barbados:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER B"
    },
    {
        emoji: "🇧🇾",
        alias: ":belarus:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇧🇪",
        alias: ":belgium:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇧🇿",
        alias: ":belize:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇧🇯",
        alias: ":benin:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER J"
    },
    {
        emoji: "🇧🇲",
        alias: ":bermuda:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇧🇹",
        alias: ":bhutan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇧🇴",
        alias: ":bolivia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇧🇶",
        alias: ":caribbean_netherlands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER Q"
    },
    {
        emoji: "🇧🇦",
        alias: ":bosnia_herzegovina:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇧🇼",
        alias: ":botswana:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇧🇷",
        alias: ":brazil:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇮🇴",
        alias: ":british_indian_ocean_territory:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇻🇬",
        alias: ":british_virgin_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇧🇳",
        alias: ":brunei:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇧🇬",
        alias: ":bulgaria:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇧🇫",
        alias: ":burkina_faso:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇧🇮",
        alias: ":burundi:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇨🇻",
        alias: ":cape_verde:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER V"
    },
    {
        emoji: "🇰🇭",
        alias: ":cambodia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇨🇲",
        alias: ":cameroon:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇨🇦",
        alias: ":canada:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇮🇨",
        alias: ":canary_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇰🇾",
        alias: ":cayman_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇨🇫",
        alias: ":central_african_republic:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇹🇩",
        alias: ":chad:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇨🇱",
        alias: ":chile:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇨🇳",
        alias: ":cn:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇨🇽",
        alias: ":christmas_island:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER X"
    },
    {
        emoji: "🇨🇨",
        alias: ":cocos_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇨🇴",
        alias: ":colombia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇰🇲",
        alias: ":comoros:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇨🇬",
        alias: ":congo_brazzaville:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇨🇩",
        alias: ":congo_kinshasa:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇨🇰",
        alias: ":cook_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇨🇷",
        alias: ":costa_rica:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇨🇮",
        alias: ":cote_divoire:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇭🇷",
        alias: ":croatia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇨🇺",
        alias: ":cuba:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇨🇼",
        alias: ":curacao:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇨🇾",
        alias: ":cyprus:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇨🇿",
        alias: ":czech_republic:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇩🇰",
        alias: ":denmark:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇩🇯",
        alias: ":djibouti:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER J"
    },
    {
        emoji: "🇩🇲",
        alias: ":dominica:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇩🇴",
        alias: ":dominican_republic:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇪🇨",
        alias: ":ecuador:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇪🇬",
        alias: ":egypt:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇸🇻",
        alias: ":el_salvador:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER V"
    },
    {
        emoji: "🇬🇶",
        alias: ":equatorial_guinea:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER Q"
    },
    {
        emoji: "🇪🇷",
        alias: ":eritrea:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇪🇪",
        alias: ":estonia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇪🇹",
        alias: ":ethiopia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇪🇺",
        alias: ":eu:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇫🇰",
        alias: ":falkland_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇫🇴",
        alias: ":faroe_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇫🇯",
        alias: ":fiji:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER J"
    },
    {
        emoji: "🇫🇮",
        alias: ":finland:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇫🇷",
        alias: ":fr:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇬🇫",
        alias: ":french_guiana:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇵🇫",
        alias: ":french_polynesia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇹🇫",
        alias: ":french_southern_territories:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇬🇦",
        alias: ":gabon:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇬🇲",
        alias: ":gambia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇬🇪",
        alias: ":georgia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇩🇪",
        alias: ":de:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇬🇭",
        alias: ":ghana:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇬🇮",
        alias: ":gibraltar:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇬🇷",
        alias: ":greece:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇬🇱",
        alias: ":greenland:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇬🇩",
        alias: ":grenada:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇬🇵",
        alias: ":guadeloupe:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER P"
    },
    {
        emoji: "🇬🇺",
        alias: ":guam:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇬🇹",
        alias: ":guatemala:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇬🇬",
        alias: ":guernsey:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇬🇳",
        alias: ":guinea:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇬🇼",
        alias: ":guinea_bissau:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇬🇾",
        alias: ":guyana:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇭🇹",
        alias: ":haiti:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇭🇳",
        alias: ":honduras:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇭🇰",
        alias: ":hong_kong:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇭🇺",
        alias: ":hungary:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇮🇸",
        alias: ":iceland:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇮🇳",
        alias: ":india:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇮🇩",
        alias: ":indonesia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇮🇷",
        alias: ":iran:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇮🇶",
        alias: ":iraq:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER Q"
    },
    {
        emoji: "🇮🇪",
        alias: ":ireland:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇮🇲",
        alias: ":isle_of_man:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇮🇱",
        alias: ":israel:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇮🇹",
        alias: ":it:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇯🇲",
        alias: ":jamaica:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇯🇵",
        alias: ":jp:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER P"
    },
    { emoji: "🎌", alias: ":crossed_flags:", name: "CROSSED FLAGS" },
    {
        emoji: "🇯🇪",
        alias: ":jersey:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇯🇴",
        alias: ":jordan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇰🇿",
        alias: ":kazakhstan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇰🇪",
        alias: ":kenya:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇰🇮",
        alias: ":kiribati:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇽🇰",
        alias: ":kosovo:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER X, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇰🇼",
        alias: ":kuwait:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇰🇬",
        alias: ":kyrgyzstan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇱🇦",
        alias: ":laos:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇱🇻",
        alias: ":latvia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER V"
    },
    {
        emoji: "🇱🇧",
        alias: ":lebanon:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER B"
    },
    {
        emoji: "🇱🇸",
        alias: ":lesotho:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇱🇷",
        alias: ":liberia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇱🇾",
        alias: ":libya:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇱🇮",
        alias: ":liechtenstein:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇱🇹",
        alias: ":lithuania:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇱🇺",
        alias: ":luxembourg:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇲🇴",
        alias: ":macau:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇲🇰",
        alias: ":macedonia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇲🇬",
        alias: ":madagascar:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇲🇼",
        alias: ":malawi:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇲🇾",
        alias: ":malaysia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇲🇻",
        alias: ":maldives:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER V"
    },
    {
        emoji: "🇲🇱",
        alias: ":mali:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇲🇹",
        alias: ":malta:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇲🇭",
        alias: ":marshall_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇲🇶",
        alias: ":martinique:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER Q"
    },
    {
        emoji: "🇲🇷",
        alias: ":mauritania:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇲🇺",
        alias: ":mauritius:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇾🇹",
        alias: ":mayotte:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER Y, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇲🇽",
        alias: ":mexico:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER X"
    },
    {
        emoji: "🇫🇲",
        alias: ":micronesia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇲🇩",
        alias: ":moldova:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇲🇨",
        alias: ":monaco:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇲🇳",
        alias: ":mongolia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇲🇪",
        alias: ":montenegro:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇲🇸",
        alias: ":montserrat:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇲🇦",
        alias: ":morocco:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇲🇿",
        alias: ":mozambique:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇲🇲",
        alias: ":myanmar:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇳🇦",
        alias: ":namibia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇳🇷",
        alias: ":nauru:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇳🇵",
        alias: ":nepal:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER P"
    },
    {
        emoji: "🇳🇱",
        alias: ":netherlands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇳🇨",
        alias: ":new_caledonia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇳🇿",
        alias: ":new_zealand:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇳🇮",
        alias: ":nicaragua:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇳🇪",
        alias: ":niger:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇳🇬",
        alias: ":nigeria:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇳🇺",
        alias: ":niue:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇳🇫",
        alias: ":norfolk_island:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇲🇵",
        alias: ":northern_mariana_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER P"
    },
    {
        emoji: "🇰🇵",
        alias: ":north_korea:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER P"
    },
    {
        emoji: "🇳🇴",
        alias: ":norway:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇴🇲",
        alias: ":oman:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER O, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇵🇰",
        alias: ":pakistan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇵🇼",
        alias: ":palau:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇵🇸",
        alias: ":palestinian_territories:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇵🇦",
        alias: ":panama:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇵🇬",
        alias: ":papua_new_guinea:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇵🇾",
        alias: ":paraguay:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇵🇪",
        alias: ":peru:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇵🇭",
        alias: ":philippines:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇵🇳",
        alias: ":pitcairn_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇵🇱",
        alias: ":poland:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇵🇹",
        alias: ":portugal:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇵🇷",
        alias: ":puerto_rico:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇶🇦",
        alias: ":qatar:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER Q, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇷🇪",
        alias: ":reunion:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇷🇴",
        alias: ":romania:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇷🇺",
        alias: ":ru:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇷🇼",
        alias: ":rwanda:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇧🇱",
        alias: ":st_barthelemy:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇸🇭",
        alias: ":st_helena:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇰🇳",
        alias: ":st_kitts_nevis:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇱🇨",
        alias: ":st_lucia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇵🇲",
        alias: ":st_pierre_miquelon:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇻🇨",
        alias: ":st_vincent_grenadines:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇼🇸",
        alias: ":samoa:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER W, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇸🇲",
        alias: ":san_marino:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇸🇹",
        alias: ":sao_tome_principe:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇸🇦",
        alias: ":saudi_arabia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇸🇳",
        alias: ":senegal:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇷🇸",
        alias: ":serbia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇸🇨",
        alias: ":seychelles:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇸🇱",
        alias: ":sierra_leone:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇸🇬",
        alias: ":singapore:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇸🇽",
        alias: ":sint_maarten:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER X"
    },
    {
        emoji: "🇸🇰",
        alias: ":slovakia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇸🇮",
        alias: ":slovenia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇸🇧",
        alias: ":solomon_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER B"
    },
    {
        emoji: "🇸🇴",
        alias: ":somalia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇿🇦",
        alias: ":south_africa:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER Z, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇬🇸",
        alias: ":south_georgia_south_sandwich_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇰🇷",
        alias: ":kr:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇸🇸",
        alias: ":south_sudan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇪🇸",
        alias: ":es:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇱🇰",
        alias: ":sri_lanka:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇸🇩",
        alias: ":sudan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER D"
    },
    {
        emoji: "🇸🇷",
        alias: ":suriname:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇸🇿",
        alias: ":swaziland:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇸🇪",
        alias: ":sweden:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇨🇭",
        alias: ":switzerland:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇸🇾",
        alias: ":syria:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇹🇼",
        alias: ":taiwan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER W"
    },
    {
        emoji: "🇹🇯",
        alias: ":tajikistan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER J"
    },
    {
        emoji: "🇹🇿",
        alias: ":tanzania:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇹🇭",
        alias: ":thailand:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇹🇱",
        alias: ":timor_leste:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER L"
    },
    {
        emoji: "🇹🇬",
        alias: ":togo:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇹🇰",
        alias: ":tokelau:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER K"
    },
    {
        emoji: "🇹🇴",
        alias: ":tonga:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER O"
    },
    {
        emoji: "🇹🇹",
        alias: ":trinidad_tobago:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER T"
    },
    {
        emoji: "🇹🇳",
        alias: ":tunisia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇹🇷",
        alias: ":tr:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER R"
    },
    {
        emoji: "🇹🇲",
        alias: ":turkmenistan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇹🇨",
        alias: ":turks_caicos_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER C"
    },
    {
        emoji: "🇹🇻",
        alias: ":tuvalu:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER V"
    },
    {
        emoji: "🇺🇬",
        alias: ":uganda:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER G"
    },
    {
        emoji: "🇺🇦",
        alias: ":ukraine:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇦🇪",
        alias: ":united_arab_emirates:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇬🇧",
        alias: ":gb:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER B"
    },
    {
        emoji: "🇺🇸",
        alias: ":us:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER S"
    },
    {
        emoji: "🇻🇮",
        alias: ":us_virgin_islands:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER I"
    },
    {
        emoji: "🇺🇾",
        alias: ":uruguay:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER Y"
    },
    {
        emoji: "🇺🇿",
        alias: ":uzbekistan:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER Z"
    },
    {
        emoji: "🇻🇺",
        alias: ":vanuatu:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER U"
    },
    {
        emoji: "🇻🇦",
        alias: ":vatican_city:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER A"
    },
    {
        emoji: "🇻🇪",
        alias: ":venezuela:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇻🇳",
        alias: ":vietnam:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER N"
    },
    {
        emoji: "🇼🇫",
        alias: ":wallis_futuna:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER W, REGIONAL INDICATOR SYMBOL LETTER F"
    },
    {
        emoji: "🇪🇭",
        alias: ":western_sahara:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER H"
    },
    {
        emoji: "🇾🇪",
        alias: ":yemen:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER Y, REGIONAL INDICATOR SYMBOL LETTER E"
    },
    {
        emoji: "🇿🇲",
        alias: ":zambia:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER Z, REGIONAL INDICATOR SYMBOL LETTER M"
    },
    {
        emoji: "🇿🇼",
        alias: ":zimbabwe:",
        name:
            "REGIONAL INDICATOR SYMBOL LETTER Z, REGIONAL INDICATOR SYMBOL LETTER W"
    }
];

export default flags;
