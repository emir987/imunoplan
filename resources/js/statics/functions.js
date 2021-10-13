const translateNutrient = (nutrient) => {
    const {
        unitName,
        value
    } = nutrient;

    let nutrientData = {};
    switch (nutrient.nutrientName) {
        case "Protein":
            nutrientData = {
                name: "Protein",
                type: "Proteini"
            };
            break;

        case "Carbohydrate, by difference":
            nutrientData = {
                name: "Ugljeni hidrati",
                type: "Ugljeni hidrati",
            };
            break;

        case "Total sugar alcohols":
            nutrientData = {
                name: "Šećerni alkohol",
                type: "Ugljeni hidrati",
            };
            break;

        case "Energy":
            nutrientData = {
                name: "Kalorije",
                type: "Kalorije",
            };
            break;

        case "Nitrogen":
            nutrientData = {
                name: "Azot",
                type: "Minerali",
            };
            break;

        case "Starch":
            nutrientData = {
                name: "Skrob",
                type: "Ugljeni hidrati"
            };
            break;

        case "Sucrose":
            nutrientData = {
                name: "Saharoza",
                type: "Ugljeni hidrati"
            };
            break;

        case "Glucose (dextrose)":
            nutrientData = {
                name: "Glukoza",
                type: "Ugljeni hidrati"
            };
            break;

        case "Fructose":
            nutrientData = {
                name: "Fruktoza",
                type: "Ugljeni hidrati"
            };
            break;

        case "Lactose":
            nutrientData = {
                name: "Laktoza",
                type: "Ugljeni hidrati"
            };
            break;

        case "Maltose":
            nutrientData = {
                name: "Maltoza",
                type: "Ugljeni hidrati"
            };
            break;

        case "Alcohol, ethyl":
            nutrientData = {
                name: "Etanol",
                type: "Alkohol"
            };
            break;

        case "Acetic acid":
            nutrientData = {
                name: "Sirćetna kiselina",
                type: "Kiseline"
            };
            break;

        case "Citric acid":
            nutrientData = {
                name: "Mlječna kiselina",
                type: "Kiseline"
            };
            break;

        case "Malic acid":
            nutrientData = {
                name: "Jabučna kiselina",
                type: "Kiseline"
            };
            break;

        case "Water":
            nutrientData = {
                name: "Voda",
                type: ""
            };
            break;

        case "Sorbitol":
            nutrientData = {
                name: "Mlječna kiselina",
                type: "Kiseline"
            };
            break;

        case "Sorbitol":
            nutrientData = {
                name: "Sorbitol",
                type: "Alkohol"
            };
            break;

        case "Caffeine":
            nutrientData = {
                name: "Kofein",
                type: "kofein"
            };
            break;

        case "Theobromine":
            nutrientData = {
                name: "Teobromin",
                type: ""
            };
            break;

        case "Galactose":
            nutrientData = {
                name: "Galaktoza",
                type: "Ugljeni hidrati"
            };
            break;

        case "Xylitol":
            nutrientData = {
                name: "Šećerni alkohol (ksilitol)",
                type: "Ugljeni hidrati"
            };
            break;

        case "Ribose":
            nutrientData = {
                name: "Riboza",
                type: "Ugljeni hidrati"
            };
            break;

        case "Calcium, Ca":
            nutrientData = {
                name: "Kalcijum",
                type: "Minerali"
            };
            break;

        case "Chlorine, Cl":
            nutrientData = {
                name: "Hlor",
                type: "Minerali"
            };
            break;

        case "Iron, Fe":
            nutrientData = {
                name: "Gvožđe",
                type: "Minerali"
            };
            break;

        case "Magnesium, Mg":
            nutrientData = {
                name: "Magnezijum",
                type: "Minerali"
            };
            break;

        case "Phosphorus, P":
            nutrientData = {
                name: "Fosfor",
                type: "Minerali"
            };
            break;

        case "Potassium, K":
            nutrientData = {
                name: "Kalijum",
                type: "Minerali"
            };
            break;

        case "Sodium, Na":
            nutrientData = {
                name: "Natrijum",
                type: "Minerali"
            };
            break;

        case "Sulfur, S":
            nutrientData = {
                name: "Sumpor",
                type: "Minerali"
            };
            break;

        case "Zinc, Zn":
            nutrientData = {
                name: "Cink",
                type: "Minerali"
            };
            break;

        case "Chromium, Cr":
            nutrientData = {
                name: "Hrom",
                type: "Minerali"
            };
            break;

        case "Cobalt, Co":
            nutrientData = {
                name: "Kobalt",
                type: "Minerali"
            };
            break;

        case "Copper, Cu":
            nutrientData = {
                name: "Bakar",
                type: "Minerali"
            };
            break;

        case "Fluoride, F":
            nutrientData = {
                name: "Fluorid",
                type: "Minerali"
            };
            break;

        case "Iodine, I":
            nutrientData = {
                name: "Jod",
                type: "Minerali"
            };
            break;

        case "Manganese, Mn":
            nutrientData = {
                name: "Mangan",
                type: "Minerali"
            };
            break;

        case "Molybdenum, Mo":
            nutrientData = {
                name: "Molibden",
                type: "Minerali"
            };
            break;

        case "Selenium, Se":
            nutrientData = {
                name: "Selen",
                type: "Minerali"
            };
            break;

        case "Retinol":
            nutrientData = {
                name: "Retinol",
                type: "Vitamini"
            };
            break;

        case "Vitamin A, RAE":
            nutrientData = {
                name: "Retinol",
                type: "Vitamini"
            };
            break;

        case "Carotene, alpha":
            nutrientData = {
                name: "Alfa-karoten",
                type: "provitamin A"
            };
            break;

        case "Carotene, beta":
            nutrientData = {
                name: "Beta-karoten",
                type: "provitamin A"
            };
            break;

        case "Vitamin E (alpha-tocopherol)":
            nutrientData = {
                name: "Tokoferol",
                type: "Vitamini"
            };
            break;

        case "Vitamin D (D2 + D3)":
            nutrientData = {
                name: "Kalciferol",
                type: "Vitamini"
            };
            break;

        case "Phytoene":
            nutrientData = {
                name: "Fitoen",
                type: "Karotenoidi"
            };
            break;

        case "Phytofluene":
            nutrientData = {
                name: "Fitofluen",
                type: "Karotenoidi"
            };
            break;

        case "Lycopene":
            nutrientData = {
                name: "Likopen",
                type: "Karotenoidi"
            };
            break;

        case "Zeaxanthin":
            nutrientData = {
                name: "Zeaxanthin ",
                type: "Karotenoidi"
            };
            break;

        case "Cryptoxanthin, beta":
            nutrientData = {
                name: "Beta-kriptoksantin",
                type: "Karotenoidi"
            };
            break;

        case "Cryptoxanthin, alpha":
            nutrientData = {
                name: "Alfa-kriptoksantin",
                type: "Karotenoidi"
            };
            break;

        case "Lutein":
            nutrientData = {
                name: "Lutein",
                type: "Karotenoidi"
            };
            break;

        case "Boron, B":
            nutrientData = {
                name: "Bor",
                type: "Minerali"
            };
            break;

        case "Nickel, Ni":
            nutrientData = {
                name: "Nikl",
                type: "Minerali"
            };
            break;

        case "Vitamin C, total ascorbic acid":
            nutrientData = {
                name: "Askorbinska kiselina",
                type: "Vitamini"
            };
            break;

        case "Thiamin":
            nutrientData = {
                name: "Tiamin",
                type: "Vitamini"
            };
            break;

        case "Riboflavin":
            nutrientData = {
                name: "Riboflavin",
                type: "Vitamini"
            };
            break;

        case "Niacin":
            nutrientData = {
                name: "Niacin",
                type: "Vitamini"
            };
            break;

        case "Vitamin C, total ascorbic acid":
            nutrientData = {
                name: "Askorbinska kiselina",
                type: "Vitamini"
            };
            break;

        case "Pantothenic acid":
            nutrientData = {
                name: "Pantotenska kiselina",
                type: "Vitamini"
            };
            break;

        case "Vitamin B-6":
            nutrientData = {
                name: "Piridoksin",
                type: "Vitamini"
            };
            break;

        case "Biotin":
            nutrientData = {
                name: "Biotin",
                type: "Vitamini"
            };
            break;

        case "Folate, DFE":
            nutrientData = {
                name: "Folat",
                type: "Vitamini"
            };
            break;

        case "Vitamin B-12":
            nutrientData = {
                name: "Kobalamin",
                type: "Vitamini"
            };
            break;

        case "Choline, total":
            nutrientData = {
                name: "Holin",
                type: "Minerali"
            };
            break;

        case "Inositol":
            nutrientData = {
                name: "Inozitol",
                type: "Ugljeni hidrati"
            };
            break;

        case "Vitamin K (phylloquinone)":
            nutrientData = {
                name: "Filokinon",
                type: "Vitamini"
            };
            break;

        case "Vitamin K (Menaquinone-4)":
            nutrientData = {
                name: "Menakinon",
                type: "Vitamini"
            };
            break;

        case "Vitamin K (Dihydrophylloquinone)":
            nutrientData = {
                name: "Filokinon",
                type: "Vitamini"
            };
            break;

        case "Folic acid":
            nutrientData = {
                name: "Folna kiselina",
                type: "Kiseline"
            };
            break;

        case "Sugars, added":
            nutrientData = {
                name: "Dodatni šećer",
                type: "Šećeri"
            };
            break;

            // case "Sugars, Total NLEA":
            //     nutrientData = {
            //         name: "Šećer-nlea",
            //         type: "Šećeri"
            //     };
            //     break;

        case "Sugars, total including NLEA":
            nutrientData = {
                name: "Šećer",
                type: "Šećeri"
            };
            break;

        case "Cholesterol":
            nutrientData = {
                name: "Holesterol",
                type: "Lipidi"
            };
            break;

        case "Fatty acids, total trans":
            nutrientData = {
                name: "Trans masti",
                type: "Lipidi"
            };
            break;

        case "Total fat(NLEA)":
            nutrientData = {
                name: "Ukupno masti",
                type: "Lipidi"
            };
            break;

        case "Fatty acids, total saturated":
            nutrientData = {
                name: "Zasićene masti",
                type: "Lipidi"
            };
            break;

        case "Fatty acids, total monounsaturated":
            nutrientData = {
                name: "Mononezasićene masti",
                type: "Lipidi"
            };
            break;

        case "Fatty acids, total polyunsaturated":
            nutrientData = {
                name: "Polinezasićene masti",
                type: "Lipidi"
            };
            break;

        case "Total lipid (fat)":
            nutrientData = {
                name: "Lipid total",
                type: "Lipidi"
            };
            break;

        case "Inulin":
            nutrientData = {
                name: "Inulin",
                type: "Ugljeni hidrati"
            };
            break;

        case "Fiber, total dietary":
            nutrientData = {
                name: "Ukupno vlakna",
                type: "Vlakna"
            };
            break;

        case "Fiber, soluble":
            nutrientData = {
                name: "Topiva vlakna",
                type: "Vlakna"
            };
            break;

        case "Fiber, insoluble":
            nutrientData = {
                name: "Netopiva vlakna",
                type: "Vlakna"
            };
            break;
        default:
            nutrientData = {
                name: "not defined",
                type: ""
            };
            break;

    }


    nutrientData.quantity = value;
    nutrientData.unit = unitName;


    return nutrientData;
};

export {
    translateNutrient
}
