import json
import os

possible_fields_ziel = ["wissen_anwenden", "etwas_gelernt", "kommunikation", "eigeninitiative", "motivation"]
possible_fields_berichtsheft = ["puenktlich", "taeglich"]

# json_file = open("fields.json")
# valid_fields = json.load(json_file)
input_dir = os.listdir("input")

for file_name in input_dir:
    with open ('input/' + file_name, 'r') as json_file:
        file_content = json.load(json_file)

        for line in file_content:
            current_ziel = line['Ziel']
            current_wissen_anwenden = current_ziel['wissen_anwenden']
            current_etwas_gelernt = current_ziel["etwas_gelernt"]
            current_Kommunikation = current_ziel["kommunikation"]
            current_eigeninitiative = current_ziel["eigeninitiative"]
            current_motivation = current_ziel["motivation"]

            current_berichtsheft = line['Berichtsheft']
            current_puenktlich = current_berichtsheft["puenktlich"]
            current_taeglich = current_berichtsheft["taeglich"]

            if current_wissen_anwenden == 10:
                print("wissen anwenden = 10")

            if current_puenktlich == "ja":
                print("Berichtsheft wurde pünktlich gemacht")






