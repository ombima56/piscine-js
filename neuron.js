const neuron = (data) =>{
    const result = {
      questions: {},
      orders: {}
    };
  
    data.forEach(item => {
      const [typeAndQuery, response] = item.split(' - Response: ');
      const [type, ...queryParts] = typeAndQuery.split(': ');
      const query = queryParts.join(': '); // In case the query itself contains ': '
  
      if (type === 'Questions') {
        const key = query.toLowerCase().replace(/\s+/g, '_').replace(/[?!]/g, '');
        if (!result.questions[key]) {
          result.questions[key] = {
            question: query,
            responses: []
          };
        }
        result.questions[key].responses.push(response);
      } else if (type === 'Orders') {
        const key = query.toLowerCase().replace(/\s+/g, '_').replace(/[!?]/g, '');
        if (!result.orders[key]) {
          result.orders[key] = {
            order: query,
            responses: []
          };
        }
        result.orders[key].responses.push(response);
      }
    });
  
    return result;
}
  
const testData = [
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
];

console.log(JSON.stringify(neuron(testData), null, 2));
