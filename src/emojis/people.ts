const people = [
    { emoji: "😀", alias: ":grinning:", name: "GRINNING FACE" },
    { emoji: "😃", alias: ":smiley:", name: "SMILING FACE WITH OPEN MOUTH" },
    {
        emoji: "😄",
        alias: ":smile:",
        name: "SMILING FACE WITH OPEN MOUTH AND SMILING EYES"
    },
    { emoji: "😁", alias: ":grin:", name: "GRINNING FACE WITH SMILING EYES" },
    {
        emoji: "😆",
        alias: ":laughing:",
        name: "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"
    },
    {
        emoji: "😅",
        alias: ":sweat_smile:",
        name: "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT"
    },
    { emoji: "😂", alias: ":joy:", name: "FACE WITH TEARS OF JOY" },
    { emoji: "🤣", alias: ":rofl:", name: "ROLLING ON THE FLOOR LAUGHING" },
    {
        emoji: "☺️",
        alias: ":relaxed:",
        name: "WHITE SMILING FACE, VARIATION SELECTOR-16"
    },
    { emoji: "😊", alias: ":blush:", name: "SMILING FACE WITH SMILING EYES" },
    { emoji: "😇", alias: ":innocent:", name: "SMILING FACE WITH HALO" },
    {
        emoji: "🙂",
        alias: ":slightly_smiling_face:",
        name: "SLIGHTLY SMILING FACE"
    },
    { emoji: "🙃", alias: ":upside_down_face:", name: "UPSIDE-DOWN FACE" },
    { emoji: "😉", alias: ":wink:", name: "WINKING FACE" },
    { emoji: "😌", alias: ":relieved:", name: "RELIEVED FACE" },
    {
        emoji: "😍",
        alias: ":heart_eyes:",
        name: "SMILING FACE WITH HEART-SHAPED EYES"
    },
    { emoji: "😘", alias: ":kissing_heart:", name: "FACE THROWING A KISS" },
    { emoji: "😗", alias: ":kissing:", name: "KISSING FACE" },
    {
        emoji: "😙",
        alias: ":kissing_smiling_eyes:",
        name: "KISSING FACE WITH SMILING EYES"
    },
    {
        emoji: "😚",
        alias: ":kissing_closed_eyes:",
        name: "KISSING FACE WITH CLOSED EYES"
    },
    { emoji: "😋", alias: ":yum:", name: "FACE SAVOURING DELICIOUS FOOD" },
    {
        emoji: "😜",
        alias: ":stuck_out_tongue_winking_eye:",
        name: "FACE WITH STUCK-OUT TONGUE AND WINKING EYE"
    },
    {
        emoji: "😝",
        alias: ":stuck_out_tongue_closed_eyes:",
        name: "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES"
    },
    {
        emoji: "😛",
        alias: ":stuck_out_tongue:",
        name: "FACE WITH STUCK-OUT TONGUE"
    },
    { emoji: "🤑", alias: ":money_mouth_face:", name: "MONEY-MOUTH FACE" },
    { emoji: "🤗", alias: ":hugs:", name: "HUGGING FACE" },
    { emoji: "🤓", alias: ":nerd_face:", name: "NERD FACE" },
    {
        emoji: "😎",
        alias: ":sunglasses:",
        name: "SMILING FACE WITH SUNGLASSES"
    },
    { emoji: "🤡", alias: ":clown_face:", name: "CLOWN FACE" },
    { emoji: "🤠", alias: ":cowboy_hat_face:", name: "FACE WITH COWBOY HAT" },
    { emoji: "😏", alias: ":smirk:", name: "SMIRKING FACE" },
    { emoji: "😒", alias: ":unamused:", name: "UNAMUSED FACE" },
    { emoji: "😞", alias: ":disappointed:", name: "DISAPPOINTED FACE" },
    { emoji: "😔", alias: ":pensive:", name: "PENSIVE FACE" },
    { emoji: "😟", alias: ":worried:", name: "WORRIED FACE" },
    { emoji: "😕", alias: ":confused:", name: "CONFUSED FACE" },
    {
        emoji: "🙁",
        alias: ":slightly_frowning_face:",
        name: "SLIGHTLY FROWNING FACE"
    },
    {
        emoji: "☹️",
        alias: ":frowning_face:",
        name: "WHITE FROWNING FACE, VARIATION SELECTOR-16"
    },
    { emoji: "😣", alias: ":persevere:", name: "PERSEVERING FACE" },
    { emoji: "😖", alias: ":confounded:", name: "CONFOUNDED FACE" },
    { emoji: "😫", alias: ":tired_face:", name: "TIRED FACE" },
    { emoji: "😩", alias: ":weary:", name: "WEARY FACE" },
    { emoji: "😤", alias: ":triumph:", name: "FACE WITH LOOK OF TRIUMPH" },
    { emoji: "😠", alias: ":angry:", name: "ANGRY FACE" },
    { emoji: "😡", alias: ":rage:", name: "POUTING FACE" },
    { emoji: "😶", alias: ":no_mouth:", name: "FACE WITHOUT MOUTH" },
    { emoji: "😐", alias: ":neutral_face:", name: "NEUTRAL FACE" },
    { emoji: "😑", alias: ":expressionless:", name: "EXPRESSIONLESS FACE" },
    { emoji: "😯", alias: ":hushed:", name: "HUSHED FACE" },
    { emoji: "😦", alias: ":frowning:", name: "FROWNING FACE WITH OPEN MOUTH" },
    { emoji: "😧", alias: ":anguished:", name: "ANGUISHED FACE" },
    { emoji: "😮", alias: ":open_mouth:", name: "FACE WITH OPEN MOUTH" },
    { emoji: "😲", alias: ":astonished:", name: "ASTONISHED FACE" },
    { emoji: "😵", alias: ":dizzy_face:", name: "DIZZY FACE" },
    { emoji: "😳", alias: ":flushed:", name: "FLUSHED FACE" },
    { emoji: "😱", alias: ":scream:", name: "FACE SCREAMING IN FEAR" },
    { emoji: "😨", alias: ":fearful:", name: "FEARFUL FACE" },
    {
        emoji: "😰",
        alias: ":cold_sweat:",
        name: "FACE WITH OPEN MOUTH AND COLD SWEAT"
    },
    { emoji: "😢", alias: ":cry:", name: "CRYING FACE" },
    {
        emoji: "😥",
        alias: ":disappointed_relieved:",
        name: "DISAPPOINTED BUT RELIEVED FACE"
    },
    { emoji: "🤤", alias: ":drooling_face:", name: "DROOLING FACE" },
    { emoji: "😭", alias: ":sob:", name: "LOUDLY CRYING FACE" },
    { emoji: "😓", alias: ":sweat:", name: "FACE WITH COLD SWEAT" },
    { emoji: "😪", alias: ":sleepy:", name: "SLEEPY FACE" },
    { emoji: "😴", alias: ":sleeping:", name: "SLEEPING FACE" },
    { emoji: "🙄", alias: ":roll_eyes:", name: "FACE WITH ROLLING EYES" },
    { emoji: "🤔", alias: ":thinking:", name: "THINKING FACE" },
    { emoji: "🤥", alias: ":lying_face:", name: "LYING FACE" },
    { emoji: "😬", alias: ":grimacing:", name: "GRIMACING FACE" },
    { emoji: "🤐", alias: ":zipper_mouth_face:", name: "ZIPPER-MOUTH FACE" },
    { emoji: "🤢", alias: ":nauseated_face:", name: "NAUSEATED FACE" },
    { emoji: "🤧", alias: ":sneezing_face:", name: "SNEEZING FACE" },
    { emoji: "😷", alias: ":mask:", name: "FACE WITH MEDICAL MASK" },
    {
        emoji: "🤒",
        alias: ":face_with_thermometer:",
        name: "FACE WITH THERMOMETER"
    },
    {
        emoji: "🤕",
        alias: ":face_with_head_bandage:",
        name: "FACE WITH HEAD-BANDAGE"
    },
    { emoji: "😈", alias: ":smiling_imp:", name: "SMILING FACE WITH HORNS" },
    { emoji: "👿", alias: ":imp:", name: "IMP" },
    { emoji: "👹", alias: ":japanese_ogre:", name: "JAPANESE OGRE" },
    { emoji: "👺", alias: ":japanese_goblin:", name: "JAPANESE GOBLIN" },
    { emoji: "💩", alias: ":hankey:", name: "PILE OF POO" },
    { emoji: "👻", alias: ":ghost:", name: "GHOST" },
    { emoji: "💀", alias: ":skull:", name: "SKULL" },
    {
        emoji: "☠️",
        alias: ":skull_and_crossbones:",
        name: "SKULL AND CROSSBONES, VARIATION SELECTOR-16"
    },
    { emoji: "👽", alias: ":alien:", name: "EXTRATERRESTRIAL ALIEN" },
    { emoji: "👾", alias: ":space_invader:", name: "ALIEN MONSTER" },
    { emoji: "🤖", alias: ":robot:", name: "ROBOT FACE" },
    { emoji: "🎃", alias: ":jack_o_lantern:", name: "JACK-O-LANTERN" },
    {
        emoji: "😺",
        alias: ":smiley_cat:",
        name: "SMILING CAT FACE WITH OPEN MOUTH"
    },
    {
        emoji: "😸",
        alias: ":smile_cat:",
        name: "GRINNING CAT FACE WITH SMILING EYES"
    },
    { emoji: "😹", alias: ":joy_cat:", name: "CAT FACE WITH TEARS OF JOY" },
    {
        emoji: "😻",
        alias: ":heart_eyes_cat:",
        name: "SMILING CAT FACE WITH HEART-SHAPED EYES"
    },
    { emoji: "😼", alias: ":smirk_cat:", name: "CAT FACE WITH WRY SMILE" },
    {
        emoji: "😽",
        alias: ":kissing_cat:",
        name: "KISSING CAT FACE WITH CLOSED EYES"
    },
    { emoji: "🙀", alias: ":scream_cat:", name: "WEARY CAT FACE" },
    { emoji: "😿", alias: ":crying_cat_face:", name: "CRYING CAT FACE" },
    { emoji: "😾", alias: ":pouting_cat:", name: "POUTING CAT FACE" },
    { emoji: "👐", alias: ":open_hands:", name: "OPEN HANDS SIGN" },
    {
        emoji: "🙌",
        alias: ":raised_hands:",
        name: "PERSON RAISING BOTH HANDS IN CELEBRATION"
    },
    { emoji: "👏", alias: ":clap:", name: "CLAPPING HANDS SIGN" },
    { emoji: "🙏", alias: ":pray:", name: "PERSON WITH FOLDED HANDS" },
    { emoji: "🤝", alias: ":handshake:", name: "HANDSHAKE" },
    { emoji: "👍", alias: ":+1:", name: "THUMBS UP SIGN" },
    { emoji: "👎", alias: ":-1:", name: "THUMBS DOWN SIGN" },
    { emoji: "👊", alias: ":fist_oncoming:", name: "FISTED HAND SIGN" },
    { emoji: "✊", alias: ":fist_raised:", name: "RAISED FIST" },
    { emoji: "🤛", alias: ":fist_left:", name: "LEFT-FACING FIST" },
    { emoji: "🤜", alias: ":fist_right:", name: "RIGHT-FACING FIST" },
    {
        emoji: "🤞",
        alias: ":crossed_fingers:",
        name: "HAND WITH INDEX AND MIDDLE FINGERS CROSSED"
    },
    { emoji: "✌️", alias: ":v:", name: "VICTORY HAND, VARIATION SELECTOR-16" },
    { emoji: "🤘", alias: ":metal:", name: "SIGN OF THE HORNS" },
    { emoji: "👌", alias: ":ok_hand:", name: "OK HAND SIGN" },
    {
        emoji: "👈",
        alias: ":point_left:",
        name: "WHITE LEFT POINTING BACKHAND INDEX"
    },
    {
        emoji: "👉",
        alias: ":point_right:",
        name: "WHITE RIGHT POINTING BACKHAND INDEX"
    },
    {
        emoji: "👆",
        alias: ":point_up_2:",
        name: "WHITE UP POINTING BACKHAND INDEX"
    },
    {
        emoji: "👇",
        alias: ":point_down:",
        name: "WHITE DOWN POINTING BACKHAND INDEX"
    },
    {
        emoji: "☝️",
        alias: ":point_up:",
        name: "WHITE UP POINTING INDEX, VARIATION SELECTOR-16"
    },
    { emoji: "✋", alias: ":hand:", name: "RAISED HAND" },
    {
        emoji: "🤚",
        alias: ":raised_back_of_hand:",
        name: "RAISED BACK OF HAND"
    },
    {
        emoji: "🖐",
        alias: ":raised_hand_with_fingers_splayed:",
        name: "RAISED HAND WITH FINGERS SPLAYED"
    },
    {
        emoji: "🖖",
        alias: ":vulcan_salute:",
        name: "RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS"
    },
    { emoji: "👋", alias: ":wave:", name: "WAVING HAND SIGN" },
    { emoji: "🤙", alias: ":call_me_hand:", name: "CALL ME HAND" },
    { emoji: "💪", alias: ":muscle:", name: "FLEXED BICEPS" },
    {
        emoji: "🖕",
        alias: ":middle_finger:",
        name: "REVERSED HAND WITH MIDDLE FINGER EXTENDED"
    },
    {
        emoji: "✍️",
        alias: ":writing_hand:",
        name: "WRITING HAND, VARIATION SELECTOR-16"
    },
    { emoji: "🤳", alias: ":selfie:", name: "SELFIE" },
    { emoji: "💅", alias: ":nail_care:", name: "NAIL POLISH" },
    { emoji: "💍", alias: ":ring:", name: "RING" },
    { emoji: "💄", alias: ":lipstick:", name: "LIPSTICK" },
    { emoji: "💋", alias: ":kiss:", name: "KISS MARK" },
    { emoji: "👄", alias: ":lips:", name: "MOUTH" },
    { emoji: "👅", alias: ":tongue:", name: "TONGUE" },
    { emoji: "👂", alias: ":ear:", name: "EAR" },
    { emoji: "👃", alias: ":nose:", name: "NOSE" },
    { emoji: "👣", alias: ":footprints:", name: "FOOTPRINTS" },
    { emoji: "👁", alias: ":eye:", name: "EYE" },
    { emoji: "👀", alias: ":eyes:", name: "EYES" },
    {
        emoji: "🗣",
        alias: ":speaking_head:",
        name: "SPEAKING HEAD IN SILHOUETTE"
    },
    { emoji: "👤", alias: ":bust_in_silhouette:", name: "BUST IN SILHOUETTE" },
    {
        emoji: "👥",
        alias: ":busts_in_silhouette:",
        name: "BUSTS IN SILHOUETTE"
    },
    { emoji: "👶", alias: ":baby:", name: "BABY" },
    { emoji: "👦", alias: ":boy:", name: "BOY" },
    { emoji: "👧", alias: ":girl:", name: "GIRL" },
    { emoji: "👨", alias: ":man:", name: "MAN" },
    { emoji: "👩", alias: ":woman:", name: "WOMAN" },
    {
        emoji: "👱‍♀️",
        alias: ":blonde_woman:",
        name:
            "PERSON WITH BLOND HAIR, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "👱", alias: ":blonde_man:", name: "PERSON WITH BLOND HAIR" },
    { emoji: "👴", alias: ":older_man:", name: "OLDER MAN" },
    { emoji: "👵", alias: ":older_woman:", name: "OLDER WOMAN" },
    {
        emoji: "👲",
        alias: ":man_with_gua_pi_mao:",
        name: "MAN WITH GUA PI MAO"
    },
    {
        emoji: "👳‍♀️",
        alias: ":woman_with_turban:",
        name:
            "MAN WITH TURBAN, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "👳", alias: ":man_with_turban:", name: "MAN WITH TURBAN" },
    {
        emoji: "👮‍♀️",
        alias: ":policewoman:",
        name:
            "POLICE OFFICER, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "👮", alias: ":policeman:", name: "POLICE OFFICER" },
    {
        emoji: "👷‍♀️",
        alias: ":construction_worker_woman:",
        name:
            "CONSTRUCTION WORKER, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "👷",
        alias: ":construction_worker_man:",
        name: "CONSTRUCTION WORKER"
    },
    {
        emoji: "💂‍♀️",
        alias: ":guardswoman:",
        name: "GUARDSMAN, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "💂", alias: ":guardsman:", name: "GUARDSMAN" },
    {
        emoji: "🕵️‍♀️",
        alias: ":female_detective:",
        name:
            "SLEUTH OR SPY, VARIATION SELECTOR-16, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🕵️",
        alias: ":male_detective:",
        name: "SLEUTH OR SPY, VARIATION SELECTOR-16"
    },
    {
        emoji: "👩‍⚕️",
        alias: ":woman_health_worker:",
        name:
            "WOMAN, ZERO WIDTH JOINER, STAFF OF AESCULAPIUS, VARIATION SELECTOR-16"
    },
    {
        emoji: "👨‍⚕️",
        alias: ":man_health_worker:",
        name:
            "MAN, ZERO WIDTH JOINER, STAFF OF AESCULAPIUS, VARIATION SELECTOR-16"
    },
    {
        emoji: "👩‍🌾",
        alias: ":woman_farmer:",
        name: "WOMAN, ZERO WIDTH JOINER, EAR OF RICE"
    },
    {
        emoji: "👨‍🌾",
        alias: ":man_farmer:",
        name: "MAN, ZERO WIDTH JOINER, EAR OF RICE"
    },
    {
        emoji: "👩‍🍳",
        alias: ":woman_cook:",
        name: "WOMAN, ZERO WIDTH JOINER, COOKING"
    },
    {
        emoji: "👨‍🍳",
        alias: ":man_cook:",
        name: "MAN, ZERO WIDTH JOINER, COOKING"
    },
    {
        emoji: "👩‍🎓",
        alias: ":woman_student:",
        name: "WOMAN, ZERO WIDTH JOINER, GRADUATION CAP"
    },
    {
        emoji: "👨‍🎓",
        alias: ":man_student:",
        name: "MAN, ZERO WIDTH JOINER, GRADUATION CAP"
    },
    {
        emoji: "👩‍🎤",
        alias: ":woman_singer:",
        name: "WOMAN, ZERO WIDTH JOINER, MICROPHONE"
    },
    {
        emoji: "👨‍🎤",
        alias: ":man_singer:",
        name: "MAN, ZERO WIDTH JOINER, MICROPHONE"
    },
    {
        emoji: "👩‍🏫",
        alias: ":woman_teacher:",
        name: "WOMAN, ZERO WIDTH JOINER, SCHOOL"
    },
    {
        emoji: "👨‍🏫",
        alias: ":man_teacher:",
        name: "MAN, ZERO WIDTH JOINER, SCHOOL"
    },
    {
        emoji: "👩‍🏭",
        alias: ":woman_factory_worker:",
        name: "WOMAN, ZERO WIDTH JOINER, FACTORY"
    },
    {
        emoji: "👨‍🏭",
        alias: ":man_factory_worker:",
        name: "MAN, ZERO WIDTH JOINER, FACTORY"
    },
    {
        emoji: "👩‍💻",
        alias: ":woman_technologist:",
        name: "WOMAN, ZERO WIDTH JOINER, PERSONAL COMPUTER"
    },
    {
        emoji: "👨‍💻",
        alias: ":man_technologist:",
        name: "MAN, ZERO WIDTH JOINER, PERSONAL COMPUTER"
    },
    {
        emoji: "👩‍💼",
        alias: ":woman_office_worker:",
        name: "WOMAN, ZERO WIDTH JOINER, BRIEFCASE"
    },
    {
        emoji: "👨‍💼",
        alias: ":man_office_worker:",
        name: "MAN, ZERO WIDTH JOINER, BRIEFCASE"
    },
    {
        emoji: "👩‍🔧",
        alias: ":woman_mechanic:",
        name: "WOMAN, ZERO WIDTH JOINER, WRENCH"
    },
    {
        emoji: "👨‍🔧",
        alias: ":man_mechanic:",
        name: "MAN, ZERO WIDTH JOINER, WRENCH"
    },
    {
        emoji: "👩‍🔬",
        alias: ":woman_scientist:",
        name: "WOMAN, ZERO WIDTH JOINER, MICROSCOPE"
    },
    {
        emoji: "👨‍🔬",
        alias: ":man_scientist:",
        name: "MAN, ZERO WIDTH JOINER, MICROSCOPE"
    },
    {
        emoji: "👩‍🎨",
        alias: ":woman_artist:",
        name: "WOMAN, ZERO WIDTH JOINER, ARTIST PALETTE"
    },
    {
        emoji: "👨‍🎨",
        alias: ":man_artist:",
        name: "MAN, ZERO WIDTH JOINER, ARTIST PALETTE"
    },
    {
        emoji: "👩‍🚒",
        alias: ":woman_firefighter:",
        name: "WOMAN, ZERO WIDTH JOINER, FIRE ENGINE"
    },
    {
        emoji: "👨‍🚒",
        alias: ":man_firefighter:",
        name: "MAN, ZERO WIDTH JOINER, FIRE ENGINE"
    },
    {
        emoji: "👩‍✈️",
        alias: ":woman_pilot:",
        name: "WOMAN, ZERO WIDTH JOINER, AIRPLANE, VARIATION SELECTOR-16"
    },
    {
        emoji: "👨‍✈️",
        alias: ":man_pilot:",
        name: "MAN, ZERO WIDTH JOINER, AIRPLANE, VARIATION SELECTOR-16"
    },
    {
        emoji: "👩‍🚀",
        alias: ":woman_astronaut:",
        name: "WOMAN, ZERO WIDTH JOINER, ROCKET"
    },
    {
        emoji: "👨‍🚀",
        alias: ":man_astronaut:",
        name: "MAN, ZERO WIDTH JOINER, ROCKET"
    },
    {
        emoji: "👩‍⚖️",
        alias: ":woman_judge:",
        name: "WOMAN, ZERO WIDTH JOINER, SCALES, VARIATION SELECTOR-16"
    },
    {
        emoji: "👨‍⚖️",
        alias: ":man_judge:",
        name: "MAN, ZERO WIDTH JOINER, SCALES, VARIATION SELECTOR-16"
    },
    { emoji: "🤶", alias: ":mrs_claus:", name: "MOTHER CHRISTMAS" },
    { emoji: "🎅", alias: ":santa:", name: "FATHER CHRISTMAS" },
    { emoji: "👸", alias: ":princess:", name: "PRINCESS" },
    { emoji: "🤴", alias: ":prince:", name: "PRINCE" },
    { emoji: "👰", alias: ":bride_with_veil:", name: "BRIDE WITH VEIL" },
    { emoji: "🤵", alias: ":man_in_tuxedo:", name: "MAN IN TUXEDO" },
    { emoji: "👼", alias: ":angel:", name: "BABY ANGEL" },
    { emoji: "🤰", alias: ":pregnant_woman:", name: "PREGNANT WOMAN" },
    {
        emoji: "🙇‍♀️",
        alias: ":bowing_woman:",
        name:
            "PERSON BOWING DEEPLY, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "🙇", alias: ":bowing_man:", name: "PERSON BOWING DEEPLY" },
    {
        emoji: "💁",
        alias: ":tipping_hand_woman:",
        name: "INFORMATION DESK PERSON"
    },
    {
        emoji: "💁‍♂️",
        alias: ":tipping_hand_man:",
        name:
            "INFORMATION DESK PERSON, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🙅",
        alias: ":no_good_woman:",
        name: "FACE WITH NO GOOD GESTURE"
    },
    {
        emoji: "🙅‍♂️",
        alias: ":no_good_man:",
        name:
            "FACE WITH NO GOOD GESTURE, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "🙆", alias: ":ok_woman:", name: "FACE WITH OK GESTURE" },
    {
        emoji: "🙆‍♂️",
        alias: ":ok_man:",
        name:
            "FACE WITH OK GESTURE, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🙋",
        alias: ":raising_hand_woman:",
        name: "HAPPY PERSON RAISING ONE HAND"
    },
    {
        emoji: "🙋‍♂️",
        alias: ":raising_hand_man:",
        name:
            "HAPPY PERSON RAISING ONE HAND, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🤦‍♀️",
        alias: ":woman_facepalming:",
        name: "FACE PALM, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🤦‍♂️",
        alias: ":man_facepalming:",
        name: "FACE PALM, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🤷‍♀️",
        alias: ":woman_shrugging:",
        name: "SHRUG, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🤷‍♂️",
        alias: ":man_shrugging:",
        name: "SHRUG, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "🙎", alias: ":pouting_woman:", name: "PERSON WITH POUTING FACE" },
    {
        emoji: "🙎‍♂️",
        alias: ":pouting_man:",
        name:
            "PERSON WITH POUTING FACE, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "🙍", alias: ":frowning_woman:", name: "PERSON FROWNING" },
    {
        emoji: "🙍‍♂️",
        alias: ":frowning_man:",
        name:
            "PERSON FROWNING, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "💇", alias: ":haircut_woman:", name: "HAIRCUT" },
    {
        emoji: "💇‍♂️",
        alias: ":haircut_man:",
        name: "HAIRCUT, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "💆", alias: ":massage_woman:", name: "FACE MASSAGE" },
    {
        emoji: "💆‍♂️",
        alias: ":massage_man:",
        name:
            "FACE MASSAGE, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🕴",
        alias: ":business_suit_levitating:",
        name: "MAN IN BUSINESS SUIT LEVITATING"
    },
    { emoji: "💃", alias: ":dancer:", name: "DANCER" },
    { emoji: "🕺", alias: ":man_dancing:", name: "MAN DANCING" },
    { emoji: "👯", alias: ":dancing_women:", name: "WOMAN WITH BUNNY EARS" },
    {
        emoji: "👯‍♂️",
        alias: ":dancing_men:",
        name:
            "WOMAN WITH BUNNY EARS, ZERO WIDTH JOINER, MALE SIGN, VARIATION SELECTOR-16"
    },
    {
        emoji: "🚶‍♀️",
        alias: ":walking_woman:",
        name:
            "PEDESTRIAN, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "🚶", alias: ":walking_man:", name: "PEDESTRIAN" },
    {
        emoji: "🏃‍♀️",
        alias: ":running_woman:",
        name: "RUNNER, ZERO WIDTH JOINER, FEMALE SIGN, VARIATION SELECTOR-16"
    },
    { emoji: "🏃", alias: ":running_man:", name: "RUNNER" },
    { emoji: "👫", alias: ":couple:", name: "MAN AND WOMAN HOLDING HANDS" },
    {
        emoji: "👭",
        alias: ":two_women_holding_hands:",
        name: "TWO WOMEN HOLDING HANDS"
    },
    {
        emoji: "👬",
        alias: ":two_men_holding_hands:",
        name: "TWO MEN HOLDING HANDS"
    },
    {
        emoji: "💑",
        alias: ":couple_with_heart_woman_man:",
        name: "COUPLE WITH HEART"
    },
    {
        emoji: "👩‍❤️‍👩",
        alias: ":couple_with_heart_woman_woman:",
        name:
            "WOMAN, ZERO WIDTH JOINER, HEAVY BLACK HEART, VARIATION SELECTOR-16, ZERO WIDTH JOINER, WOMAN"
    },
    {
        emoji: "👨‍❤️‍👨",
        alias: ":couple_with_heart_man_man:",
        name:
            "MAN, ZERO WIDTH JOINER, HEAVY BLACK HEART, VARIATION SELECTOR-16, ZERO WIDTH JOINER, MAN"
    },
    { emoji: "💏", alias: ":couplekiss_man_woman:", name: "KISS" },
    {
        emoji: "👩‍❤️‍💋‍👩",
        alias: ":couplekiss_woman_woman:",
        name:
            "WOMAN, ZERO WIDTH JOINER, HEAVY BLACK HEART, VARIATION SELECTOR-16, ZERO WIDTH JOINER, KISS MARK, ZERO WIDTH JOINER, WOMAN"
    },
    {
        emoji: "👨‍❤️‍💋‍👨",
        alias: ":couplekiss_man_man:",
        name:
            "MAN, ZERO WIDTH JOINER, HEAVY BLACK HEART, VARIATION SELECTOR-16, ZERO WIDTH JOINER, KISS MARK, ZERO WIDTH JOINER, MAN"
    },
    { emoji: "👪", alias: ":family_man_woman_boy:", name: "FAMILY" },
    {
        emoji: "👨‍👩‍👧",
        alias: ":family_man_woman_girl:",
        name: "MAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👨‍👩‍👧‍👦",
        alias: ":family_man_woman_girl_boy:",
        name:
            "MAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👩‍👦‍👦",
        alias: ":family_man_woman_boy_boy:",
        name:
            "MAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, BOY, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👩‍👧‍👧",
        alias: ":family_man_woman_girl_girl:",
        name:
            "MAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👩‍👩‍👦",
        alias: ":family_woman_woman_boy:",
        name: "WOMAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👩‍👩‍👧",
        alias: ":family_woman_woman_girl:",
        name: "WOMAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👩‍👩‍👧‍👦",
        alias: ":family_woman_woman_girl_boy:",
        name:
            "WOMAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👩‍👩‍👦‍👦",
        alias: ":family_woman_woman_boy_boy:",
        name:
            "WOMAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, BOY, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👩‍👩‍👧‍👧",
        alias: ":family_woman_woman_girl_girl:",
        name:
            "WOMAN, ZERO WIDTH JOINER, WOMAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👨‍👨‍👦",
        alias: ":family_man_man_boy:",
        name: "MAN, ZERO WIDTH JOINER, MAN, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👨‍👧",
        alias: ":family_man_man_girl:",
        name: "MAN, ZERO WIDTH JOINER, MAN, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👨‍👨‍👧‍👦",
        alias: ":family_man_man_girl_boy:",
        name:
            "MAN, ZERO WIDTH JOINER, MAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👨‍👦‍👦",
        alias: ":family_man_man_boy_boy:",
        name:
            "MAN, ZERO WIDTH JOINER, MAN, ZERO WIDTH JOINER, BOY, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👨‍👧‍👧",
        alias: ":family_man_man_girl_girl:",
        name:
            "MAN, ZERO WIDTH JOINER, MAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👩‍👦",
        alias: ":family_woman_boy:",
        name: "WOMAN, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👩‍👧",
        alias: ":family_woman_girl:",
        name: "WOMAN, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👩‍👧‍👦",
        alias: ":family_woman_girl_boy:",
        name: "WOMAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👩‍👦‍👦",
        alias: ":family_woman_boy_boy:",
        name: "WOMAN, ZERO WIDTH JOINER, BOY, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👩‍👧‍👧",
        alias: ":family_woman_girl_girl:",
        name: "WOMAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👨‍👦",
        alias: ":family_man_boy:",
        name: "MAN, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👧",
        alias: ":family_man_girl:",
        name: "MAN, ZERO WIDTH JOINER, GIRL"
    },
    {
        emoji: "👨‍👧‍👦",
        alias: ":family_man_girl_boy:",
        name: "MAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👦‍👦",
        alias: ":family_man_boy_boy:",
        name: "MAN, ZERO WIDTH JOINER, BOY, ZERO WIDTH JOINER, BOY"
    },
    {
        emoji: "👨‍👧‍👧",
        alias: ":family_man_girl_girl:",
        name: "MAN, ZERO WIDTH JOINER, GIRL, ZERO WIDTH JOINER, GIRL"
    },
    { emoji: "👚", alias: ":womans_clothes:", name: "WOMANS CLOTHES" },
    { emoji: "👕", alias: ":shirt:", name: "T-SHIRT" },
    { emoji: "👖", alias: ":jeans:", name: "JEANS" },
    { emoji: "👔", alias: ":necktie:", name: "NECKTIE" },
    { emoji: "👗", alias: ":dress:", name: "DRESS" },
    { emoji: "👙", alias: ":bikini:", name: "BIKINI" },
    { emoji: "👘", alias: ":kimono:", name: "KIMONO" },
    { emoji: "👠", alias: ":high_heel:", name: "HIGH-HEELED SHOE" },
    { emoji: "👡", alias: ":sandal:", name: "WOMANS SANDAL" },
    { emoji: "👢", alias: ":boot:", name: "WOMANS BOOTS" },
    { emoji: "👞", alias: ":mans_shoe:", name: "MANS SHOE" },
    { emoji: "👟", alias: ":athletic_shoe:", name: "ATHLETIC SHOE" },
    { emoji: "👒", alias: ":womans_hat:", name: "WOMANS HAT" },
    { emoji: "🎩", alias: ":tophat:", name: "TOP HAT" },
    { emoji: "🎓", alias: ":mortar_board:", name: "GRADUATION CAP" },
    { emoji: "👑", alias: ":crown:", name: "CROWN" },
    {
        emoji: "⛑",
        alias: ":rescue_worker_helmet:",
        name: "HELMET WITH WHITE CROSS"
    },
    { emoji: "🎒", alias: ":school_satchel:", name: "SCHOOL SATCHEL" },
    { emoji: "👝", alias: ":pouch:", name: "POUCH" },
    { emoji: "👛", alias: ":purse:", name: "PURSE" },
    { emoji: "👜", alias: ":handbag:", name: "HANDBAG" },
    { emoji: "💼", alias: ":briefcase:", name: "BRIEFCASE" },
    { emoji: "👓", alias: ":eyeglasses:", name: "EYEGLASSES" },
    { emoji: "🕶", alias: ":dark_sunglasses:", name: "DARK SUNGLASSES" },
    { emoji: "🌂", alias: ":closed_umbrella:", name: "CLOSED UMBRELLA" },
    {
        emoji: "☂️",
        alias: ":open_umbrella:",
        name: "UMBRELLA, VARIATION SELECTOR-16"
    }
];

export default people;
