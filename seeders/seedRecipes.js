const recipe1 = {
  title: 'Vanilla Bean Coconut Ice Cream',
  serves: '8 1/2 cup servings',
  time: '7 hours',
  vegCategory: 'Vegan',
  coverPhotoUrl: 'https://minimalistbaker.com/wp-content/uploads/2015/08/Coconut-Ice-Cream-SQUARE.jpg',
  ingredientList: [
    {
      item: {
        name: 'Coconut cream',
        amount: '2 14-ounce cans'
      }
    },
    {
      item: {
        name: 'Organic cane sugar',
        amount: '100 g'
      }
    },
    {
      item: {
        name: 'Vanilla bean pod',
        amount: '1 pod'
      }
    },
    {
      item: {
        name: 'Pure vanilla extract',
        amount: '2 tsp'
      }
    }
  ],
  instructions: [
    'Add coconut milk, organic cane sugar (sub up to half with natural sweetener), sea salt, scraped vanilla bean and vanilla extract to a high-speed blender and blend on high until completely creamy and smooth for 1-2 minutes to fully dissolve the sugar. Add more cane sugar or agave if it needs more sweetness, or more vanilla if it needs more vanilla flavor.',
    'Add mixture directly to chilled ice cream maker and churn according to manufacturer’s instructions - about 45 minutes. It should look like soft serve.',
    'Once churned, transfer the ice cream to a large freezer-safe container (such as a loaf pan) and use a spoon to smooth the top.',
    'Cover securely and freeze for at least 4-6 hours or until firm. Set out for 5-10 minutes before serving to soften - a hot ice cream scoop also eases scooping.'
  ]
}

const recipe2 = {
  title: 'Cauliflower tacos',
  serves: '2',
  time: '30 mins',
  vegCategory: 'Vegan',
  coverPhotoUrl: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1532071043/IMG_9223_i2prfd.jpg',
  ingredientList: [
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
module.exports = [recipe1, recipe2]
