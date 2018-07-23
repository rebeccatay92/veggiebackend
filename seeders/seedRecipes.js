const recipe1 = {
  creator: 'seededuser',
  recipeTitle: 'Vanilla Bean Coconut Ice Cream',
  servings: '8 1/2 cup servings',
  time: '7 hours',
  vegCategory: 'Vegan',
  coverPhotoUrl: 'https://minimalistbaker.com/wp-content/uploads/2015/08/Coconut-Ice-Cream-SQUARE.jpg',
  ingredients: [
    { name: 'Coconut cream', amount: '2 14-ounce cans' },
    { name: 'Organic cane sugar', amount: '100g' },
    { name: 'Vanilla bean pod', amount: '1 pod' },
    { name: 'Pure vanilla extract', amount: '2 tsp' }
  ],
  instructions: [
    'Add coconut milk, organic cane sugar (sub up to half with natural sweetener), sea salt, scraped vanilla bean and vanilla extract to a high-speed blender and blend on high until completely creamy and smooth for 1-2 minutes to fully dissolve the sugar. Add more cane sugar or agave if it needs more sweetness, or more vanilla if it needs more vanilla flavor.',
    'Add mixture directly to chilled ice cream maker and churn according to manufacturer’s instructions - about 45 minutes. It should look like soft serve.',
    'Once churned, transfer the ice cream to a large freezer-safe container (such as a loaf pan) and use a spoon to smooth the top.',
    'Cover securely and freeze for at least 4-6 hours or until firm. Set out for 5-10 minutes before serving to soften - a hot ice cream scoop also eases scooping.'
  ]
}

const recipe2 = {
  creator: 'seededuser',
  recipeTitle: 'Cauliflower tacos',
  servings: '2',
  time: '30 mins',
  vegCategory: 'Vegan',
  coverPhotoUrl: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1532071043/IMG_9223_i2prfd.jpg',
  groups: [
    {
      groupHeading: 'For the filling',
      groupedItems: [
        { name: 'Cauliflower', amount: '1 head' },
        { name: 'Chickpeas', amount: '1 can' },
        { name: 'Refried beans', amount: '1 can' },
        { name: 'Onion, chopped', amount: '1/2' },
        { name: 'Minced garlic', amount: '1 tbsp' },
        { name: 'Cumin', amount: '1 tsp' },
        { name: 'Smoked paprika', amount: '1 tsp' },
        { name: 'Onion salt', amount: '1 tsp' },
        { name: 'Black pepper', amount: '1 tsp' },
        { name: 'Liquid aminos (soy / tamari)', amount: '1 tbsp' },
        { name: 'Plant milk', amount: '1 tbsp' }
      ]
    },
    {
      groupHeading: 'For the slaw',
      groupedItems: [
        { name: 'Romaine or kale' },
        { name: 'Carrots' },
        { name: 'Red cabbage' },
        { name: 'Lime juice', amount: '1 lime' },
        { name: 'Coconut sugar', amount: '1 tbsp' },
        { name: 'Avocado', amount: '1' },
        { name: 'Apple cider vinegar', amount: '1 tsp' }
      ]
    },
    {
      groupHeading: 'For the crema',
      groupedItems: [
        { name: 'Vegan mayo', amount: '2 heaped tbsp' },
        { name: 'Salt', amount: '1/2 tsp' },
        { name: 'Cumin', amount: '1/2 tsp' },
        { name: 'Garlic powder', amount: '1/2 tsp' },
        { name: 'Onion powder', amount: '1/2' },
        { name: 'Agave', amount: '1/2 tbsp' }
      ]
    }
  ],
  instructions: [
    'Chop your cauliflower into small pieces and then toss everything else into a large bowl and mix well with hands. Use parchment paper on a large tray and bake at 425F / 220C for 30 minutes, if they need more time try another 5 - 10 minutes. (The refried beans are an option to spread into your taco shell as you serve, it is not included in the filling to be cooked.)',
    'Mix the slaw with your hands, crush an avocado into your hands and massage it into your slaw with everything else. Once mixed refrigerate until ready to serve.',
    'Mix the crema into a bowl and also put into the fridge until you’re ready to serve.',
    'Once filling is done use any taco shell you like and fill the bottom with refried beans, then the rest of your filling and top it off with the slaw & crema.'
  ]
}

const recipe3 = {
  creator: 'seededuser',
  recipeTitle: 'Wholewheat Maple Cinnamon Buns',
  servings: '9 buns',
  time: '55 mins',
  vegCategory: 'Vegan',
  coverPhotoUrl: 'http://cookingwithmykid.com/wp-content/uploads/2011/01/cinnamon-rolls.jpg',
  ingredients: [
    { name: 'Unsweetened almond milk', amount: '185ml' },
    { name: 'Dried active yeast', amount: '7g' },
    { name: 'Maple syrup', amount: '2 tbsp' },
    { name: 'Ground flaxseed', amount: '1 tbsp' },
    { name: 'Coconut oil', amount: '1 tbsp' },
    { name: 'Wholegrain flour', amount: '150g' },
    { name: 'Plain white flour', amount: '160g' },
    { name: 'Ground cinnamon', amount: '1 tsp' }
  ],
  groups: [
    {
      groupHeading: 'Filling',
      groupedItems: [
        { name: 'Pecan nuts', amount: '90g' },
        { name: 'Ripe medium bananas', amount: '2' },
        { name: 'Pecan nuts', amount: '90g' },
        { name: 'Medjool dates', amount: '4' },
        { name: 'Ground cinnamon', amount: '1 tbsp' },
        { name: 'Maple syrup', amount: '2 tbsp' }
      ]
    },
    {
      groupHeading: 'Almond Icing',
      groupedItems: [
        { name: 'Almond Milk', amount: '1 - 2 tbsp' },
        { name: 'Icing sugar', amount: '75g' }
      ]
    }
  ]
}

const recipe4 = {
  creator: 'seededuser',
  recipeTitle: 'Vegan Sponge Cake',
  servings: '8 to 10',
  time: '50 mins',
  vegCategory: 'Vegan',
  coverPhotoUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/12/vegan-sponge-cake.jpg?itok=LCJdjkYd',
  ingredients: [
    { name: 'Dairy-free spread', amount: '150g' },
    { name: 'Oat milk', amount: '300ml' },
    { name: 'Cider vinegar', amount: '1tbsp' },
    { name: 'Vanilla pod, seeds scraped', amount: '1' },
    { name: 'Self-raising flour', amount: '300g' },
    { name: 'Golden caster sugar', amount: '200g' },
    { name: 'Bicarbonate soda', amount: '1 tsp' }
  ],
  groups: [
    {
      groupHeading: 'For the filling',
      groupedItems: [
        { name: 'Dairy-free spread', amount: '100g' },
        { name: 'Icing sugar', amount: '200g' },
        { name: 'Strawberry jam', amount: '4 tbsp' }
      ]
    }
  ],
  instructions: [
    'Heat oven to 180C/160C fan/gas 4. Line the bases of 2 x 20cm sandwich tins with baking parchment and grease with a little of the dairy-free spread.',
    'Put the dairy-free milk into a jug and add the vinegar, leave for a few minutes until it looks a little lumpy. Put half of the vanilla seeds and all the other cake ingredients into a large bowl then pour over the milk mixture. Using electric beaters or a wooden spoon, beat everything together until smooth.',
    'Divide the mix between your two tins then bake in the centre of the oven for 30-35 mins or until a skewer inserted into the middle of the cakes comes out cleanly. Leave them in their tins until cool enough to handle then carefully turn out onto wire racks to cool completely.',
    'While the cakes are cooling, make the filling. To make the vegan buttercream, whisk or beat together the dairy-free spread, icing sugar and remaining vanilla seeds until pale and fluffy. Dairy-free spreads do vary so if the spread you are using is quite soft try to avoid using electric beaters. Stir the ingredients together instead to avoid overworking it. However, if the mixture is too firm, use electric beaters to help lighten it and add 1-2 tbsp of dairy-free milk when whisking.',
    'Spread the jam onto one of the cooled sponges, top with the buttercream then place the other sponge on top. Dust the assembled cake with a little icing sugar or caster sugar before slicing.'
  ]
}
module.exports = [recipe1, recipe2, recipe3, recipe4]
