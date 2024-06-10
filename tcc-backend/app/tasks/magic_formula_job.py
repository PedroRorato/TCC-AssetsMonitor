import json

# Generate Magic Formula Ranking
def get_magic_formula_ranking():
  file = open('app/store/stock_metrics.json', 'r')
  data = json.load(file)
  # Filter 'EV/EBIT'
  filtered_data1 = [stock for stock in data if stock['EV/EBIT'] > 0]
  # Rank by 'EV/EBIT'
  ranking1 = sorted(filtered_data1, key=lambda x: x['EV/EBIT'])
  for i in range(len(ranking1)):
    ranking1[i]['ranking1'] = i
    # Convert ROIC
    removed_percentage = ranking1[i]['ROIC'].replace('%', '')
    replaced_commas = removed_percentage.replace(',', '.')
    ranking1[i]['ROIC'] = float(replaced_commas)
  # Filter 'ROIC'
  filtered_data2 = [stock for stock in ranking1 if stock['ROIC'] > 0]
  # Rank by 'ROIC'
  final_ranking = []
  ranking2 = sorted(filtered_data2, key=lambda x: x['ROIC'], reverse=True)
  for i in range(len(ranking2)):
    ranking2[i]['ranking2'] = i
    ranking2[i]['points'] = i + ranking2[i]['ranking1']
  # Rank by Points
  sorted_by_points = sorted(ranking2, key=lambda x: x['points'])
  # Make JSON list
  for i in range(len(sorted_by_points)):
    final_ranking.append({
      'ticker': sorted_by_points[i]['Papel'],
      'ranking1': sorted_by_points[i]['ranking1'],
      'ev_ebit': sorted_by_points[i]['EV/EBIT'],
      'ranking2': sorted_by_points[i]['ranking2'],
      'roic': sorted_by_points[i]['ROIC'],
      'final_ranking': i + 1
    })
  # Open the file in write mode
  with open('app/store/magic_formula.json', "w") as json_file:
    # Write JSON data to the file
    json.dump(final_ranking, json_file)
