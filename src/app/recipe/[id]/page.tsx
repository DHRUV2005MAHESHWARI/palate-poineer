import { api } from "~/trpc/server";
import Image from "next/image";
import Link from "next/link";

function calcEnergyGeneral(energy_kj : number) {
  let energyPoints = 0;
  // Energie
  if (energy_kj > 335)
    energyPoints++;
  if (energy_kj > 670)
    energyPoints++;
  if (energy_kj > 1005)
    energyPoints++;
  if (energy_kj > 1340)
    energyPoints++;
  if (energy_kj > 1675)
    energyPoints++;
  if (energy_kj > 2010)
    energyPoints++;
  if (energy_kj > 2345)
    energyPoints++;
  if (energy_kj > 2680)
    energyPoints++;
  if (energy_kj > 3015)
    energyPoints++;
  if (energy_kj > 3350)
    energyPoints++;

  return energyPoints;
}

function calcEnergyBeverage(energy_kj : number) {
  let energyPointsBeverage = 0;
  // Energie
  if (energy_kj > 270)
    energyPointsBeverage = 10;
  if (energy_kj <= 270 && energy_kj > 240)
    energyPointsBeverage = 9;
  if (energy_kj <= 240 && energy_kj > 210)
    energyPointsBeverage = 8;
  if (energy_kj <= 210 && energy_kj > 180)
    energyPointsBeverage = 7;
  if (energy_kj <= 180 && energy_kj > 150)
    energyPointsBeverage = 6;
  if (energy_kj <= 150 && energy_kj > 120)
    energyPointsBeverage = 5;
  if (energy_kj <= 120 && energy_kj > 90)
    energyPointsBeverage = 4;
  if (energy_kj <= 90 && energy_kj > 60)
    energyPointsBeverage = 3;
  if (energy_kj <= 60 && energy_kj > 30)
    energyPointsBeverage = 2;
  if (energy_kj <= 30 && energy_kj > 0)
    energyPointsBeverage = 1;
  if (energy_kj <= 0)
    energyPointsBeverage = 0;

  return energyPointsBeverage;
}

function calcSodiumPoints(salt : number) {
  let sodiumPoints = 0;
  const sodium = salt / 2.5 * 1000;

  // Natrium
  if (sodium > 90)
    sodiumPoints++;
  if (sodium > 180)
    sodiumPoints++;
  if (sodium > 270)
    sodiumPoints++;
  if (sodium > 360)
    sodiumPoints++;
  if (sodium > 450)
    sodiumPoints++;
  if (sodium > 540)
    sodiumPoints++;
  if (sodium > 630)
    sodiumPoints++;
  if (sodium > 720)
    sodiumPoints++;
  if (sodium > 810)
    sodiumPoints++;
  if (sodium > 900)
    sodiumPoints++;

  return sodiumPoints;
}

function calcSugarPoints(sugar : number) {
  let sugarPoints = 0;
  if (sugar > 4.5)
    sugarPoints++;
  if (sugar > 9)
    sugarPoints++;
  if (sugar > 13.5)
    sugarPoints++;
  if (sugar > 18)
    sugarPoints++;
  if (sugar > 22.5)
    sugarPoints++;
  if (sugar > 27)
    sugarPoints++;
  if (sugar > 31)
    sugarPoints++;
  if (sugar > 36)
    sugarPoints++;
  if (sugar > 40)
    sugarPoints++;
  if (sugar > 45)
    sugarPoints++;

  return sugarPoints;
}

function calcSugarBeverage(sugar : number) {
  let pointN = 0;
  // Zucker
  if (sugar > 13.5)
    pointN = 10;
  if (sugar <= 13.5 && sugar > 12)
    pointN = 9;
  if (sugar <= 12 && sugar > 10.5)
    pointN = 8;
  if (sugar <= 10.5 && sugar > 9)
    pointN = 7;
  if (sugar <= 9 && sugar > 7.5)
    pointN = 6;
  if (sugar <= 7.5 && sugar > 6)
    pointN = 5;
  if (sugar <= 6 && sugar > 4.5)
    pointN = 4;
  if (sugar <= 4.5 && sugar > 3)
    pointN = 3;
  if (sugar <= 3 && sugar > 1.5)
    pointN = 2;
  if (sugar <= 1.5 && sugar > 0)
    pointN = 1;
  if (sugar <= 0)
    pointN = 0;

  return pointN;

}

function getTotalSaturatedFattyAcidsPerLipids(fat : number, saturated_fat : number) {
  const ratio = saturated_fat / fat * 100;
  if (ratio >= 64)
    return 10;
  if (ratio < 64 && ratio >= 58)
    return 9;
  if (ratio < 58 && ratio >= 52)
    return 8;
  if (ratio < 52 && ratio >= 46)
    return 7;
  if (ratio < 46 && ratio >= 40)
    return 6;
  if (ratio < 40 && ratio >= 34)
    return 5;
  if (ratio < 34 && ratio >= 28)
    return 4;
  if (ratio < 28 && ratio >= 22)
    return 3;
  if (ratio < 22 && ratio >= 16)
    return 2;
  if (ratio < 16 && ratio >= 10)
    return 1;
  if (ratio < 10)
    return 0;
}

function calcSaturationFatPoints(saturated_fat : number) {
  let pointN = 0;
  // Gesättigte Fettsäuren
  if (saturated_fat > 1)
    pointN++;
  if (saturated_fat > 2)
    pointN++;
  if (saturated_fat > 3)
    pointN++;
  if (saturated_fat > 4)
    pointN++;
  if (saturated_fat > 5)
    pointN++;
  if (saturated_fat > 6)
    pointN++;
  if (saturated_fat > 7)
    pointN++;
  if (saturated_fat > 8)
    pointN++;
  if (saturated_fat > 9)
    pointN++;
  if (saturated_fat > 10)
    pointN++;

  return pointN;
}

/**
 * Positive Punkte
 */
function calcProteinPoints(protein : number) {
  let pointP = 0;
  // Proteine
  if (protein > 1.6)
    pointP++;
  if (protein > 3.2)
    pointP++;
  if (protein > 4.8)
    pointP++;
  if (protein > 6.4)
    pointP++;
  if (protein > 8)
    pointP++;

  return pointP;
}

function calcFiberPoints(fiber : number) {
  let pointP = 0;
  // Ballaststoffe
  if (fiber > 0.9)
    pointP++;
  if (fiber > 1.9)
    pointP++;
  if (fiber > 2.8)
    pointP++;
  if (fiber > 3.7)
    pointP++;
  if (fiber > 4.7)
    pointP++;

  return pointP;
}


function calcFruitsVegetablesNutsPoints(fruitsVegetablesNuts: number, productClass: string) {
  let pointP = 0;
  if (productClass === 'beverage') {
    if (fruitsVegetablesNuts > 80) {
      pointP += 10;
    } else if (fruitsVegetablesNuts > 60) {
      pointP += 4;
    } else if (fruitsVegetablesNuts > 40) {
      pointP += 2;
    }
  } else {
    if (fruitsVegetablesNuts > 40)
      pointP++;
    if (fruitsVegetablesNuts > 60)
      pointP++;
    if (fruitsVegetablesNuts > 80)
      pointP += 3;
  }
  return pointP;
}

function calcPointN(energy_kj : number, sugar : number, fat : number, saturated_fat : number, salt : number, productClass = 'general') {
  let pointN = 0;

  if (productClass === 'beverage') {
    pointN += calcEnergyBeverage(energy_kj);
    pointN += calcSugarBeverage(sugar);
  } else {
    pointN += calcEnergyGeneral(energy_kj);
    pointN += calcSugarPoints(sugar);
  }

  // Gesättigte Fettsäuren
  if (productClass === 'fats') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    pointN += getTotalSaturatedFattyAcidsPerLipids(fat, saturated_fat);
  } else {
    pointN += calcSaturationFatPoints(saturated_fat);
  }


  pointN += calcSodiumPoints(salt);

  return pointN;
}


function calculateNutriScore(energy_kj : number, sugar : number, fat : number, saturated_fat : number, salt : number, protein : number, fiber : number, fruitsVegetablesNuts : number, productClass = 'general') {

  // Berechnung der Energie, Zucker, Gessätige Fettsäuren, Natrium
  let pointN = 0;

  pointN = calcPointN(energy_kj, sugar, fat, saturated_fat, salt, productClass);

  // Berechnung der Proteine, Ballaststoffe, Obst, Gemüse, Hülsenfrüchte, Nüsse, Ölsaaten
  let pointP = 0;

  const proteinPoints = calcProteinPoints(protein);
  pointP += proteinPoints;

  // Ballaststoffe
  pointP += calcFiberPoints(fiber);

  // Obst, Gemüse, Hülsenfrüchte, Nüsse, Ölsaaten
  pointP += calcFruitsVegetablesNutsPoints(fruitsVegetablesNuts, productClass);

  let points = 0;
  if(productClass === 'general') {
    // Berechnung des Nutri-Scores
    // Zwischenergebnis von PointsN < 11 dann PointP voll abziehbar
    if (pointN < 11)
      points = pointN - pointP;
    // Zwischenergebnis von PointsN >= 11 und Anteil Obst, Gemüse, Hülsenfrüchte, Nüsse, Ölsaaten > 80% dann PointP voll abziehbar
    else if (pointN >= 11 && fruitsVegetablesNuts > 80)
      points = pointN - pointP;
    // Zwischenergebnis von PointsN >= 11 und Anteil Obst, Gemüse, Hülsenfrüchte, Nüsse, Ölsaaten <= 80% dann PointP ohne Protein abziehbar
    else if (pointN >= 11 && fruitsVegetablesNuts <= 80)
      points = pointN - (pointP - proteinPoints);

    console.log("points", points);
  } else {
    points = pointN - pointP;
  }



  switch (productClass) {
    case 'fats':
    case 'cheese':
    case 'general':
      if (points >= -15 && points <= -1)
        return 'A';
      if (points >= 0 && points <= 2)
        return 'B';
      if (points >= 3 && points <= 10)
        return 'C';
      if (points >= 11 && points <= 18)
        return 'D';
      if (points >= 19 && points <= 40)
        return 'E';
      break;
    case 'beverage':
      if (points <= 1)
        return 'B';
      if (points >= 2 && points <= 5)
        return 'C';
      if (points >= 6 && points <= 9)
        return 'D';
      if (points >= 10 && points <= 40)
        return 'E';
      break;
    case 'water':
      return 'A';
  }
}

export default async function Recipe({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const recipe = await api.recipeDb.fetchRecipe.mutate({
    id: Number(id),
  }) as {
    recipe_id: number;
    recipe_title: string;
    servings: number;
    prep_time: number;
    cook_time: number;
    region: string;
    sub_region: string;
    continent: string;
    source: string;
    url: string;
    img_url: string;
    energyKJ: number;
    sugarstotal: number;
    fat: number;
    saturated_fat: number;
    salt: number;
    protein: number;
    fibertotaldietary: number;
    fruits_vegetables_nuts: number;
    product_class: string;
  }

  if (!recipe) {
    return (
      <div className={`flex items-center justify-center h-screen`}>
        <h1 className={`text-3xl font-bold`}>Recipe not found.</h1>
      </div>
    );
  }

  const nutriScore = calculateNutriScore(recipe.energyKJ, recipe.sugarstotal, recipe.fat, recipe.saturated_fat, recipe.salt, recipe.protein, recipe.fibertotaldietary, recipe.fruits_vegetables_nuts, recipe.product_class);

  return (
    <div className={`flex px-8 pt-24`}>
      <div className={`flex w-full flex-col items-center justify-center p-4`}>
        <h1 className={`mb-6 text-center text-3xl font-bold`}>
          {recipe.recipe_title}
        </h1>
        <div className={`space-y-4 text-center`}>
          <p>
            Cook Time: <span className={`font-bold`}>{recipe.cook_time}</span>{" "}
            mins.
          </p>
          <p>
            Preperation Time:{" "}
            <span className={`font-bold`}>{recipe.prep_time}</span> mins.
          </p>
          <p>
            Serves: <span className={`font-bold`}>{recipe.servings}</span>{" "}
            people
          </p>
          <p>
            Region: <span className={`font-bold`}>{recipe.region}</span>
          </p>
          <p>
            Continent: <span className={`font-bold`}>{recipe.continent}</span>
          </p>
          <p>
            Sub Region: <span className={`font-bold`}>{recipe.sub_region}</span>
          </p>
          <p>
            Nutri-Score: <span className={`font-bold`}>{nutriScore}</span>
          </p>
          <p>
            Source: <span className={`font-bold`}>{recipe.source}</span> -{" "}
            <Link href={recipe.url} className={`link-primary link`}>
              View Source
            </Link>
          </p>
        </div>
      </div>
      <div className={`relative min-h-[80dvh] w-full`}>
        <Image
          src={recipe.img_url}
          alt={recipe.recipe_title}
          layout={`fill`}
          className={`rounded-xl object-contain`}
        />
      </div>
    </div>
  );
}
