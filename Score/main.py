import json
import os

input_dir = os.listdir("input")


def get_score_ziel(a, b):
    current_score = a * b
    return current_score


def get_score_berichtshet(a, b):
    if a == "ja":
        return b
    else:
        return 0


def get_score_total(a, b):
    total_score = a + b
    return total_score


for file_name in input_dir:
    with open('input/' + file_name, 'r') as json_file:
        file_content = json.load(json_file)

        for line in file_content:
            # Ziel
            current_ziel = line['Ziel']
            current_wissen_anwenden = current_ziel['wissen_anwenden']
            current_etwas_gelernt = current_ziel["etwas_gelernt"]
            current_Kommunikation = current_ziel["kommunikation"]
            current_eigeninitiative = current_ziel["eigeninitiative"]
            current_motivation = current_ziel["motivation"]
            # Berichtsheft
            current_berichtsheft = line['Berichtsheft']
            current_puenktlich = current_berichtsheft["puenktlich"]
            current_taeglich = current_berichtsheft["taeglich"]

            # Ziel:
            total_wissen_anwenden = get_score_ziel(current_wissen_anwenden, 2)  # the second number is the weight
            total_etwas_gelernt = get_score_ziel(current_etwas_gelernt, 1)
            total_Kommunikation = get_score_ziel(current_Kommunikation, 2)
            total_eigeninitiative = get_score_ziel(current_eigeninitiative, 2)
            total_motivation = get_score_ziel(current_motivation, 1)

            # Debugg:
            # print(current_wissen_anwenden, total_wissen_anwenden)
            # print(current_etwas_gelernt,total_etwas_gelernt)
            # print( current_Kommunikation, total_Kommunikation)
            # print(current_eigeninitiative, total_eigeninitiative)
            # print(current_motivation, total_motivation)

            # Berichtsheft - the second parameter is the amount of points
            total_puenktlich = get_score_berichtshet(current_puenktlich, 50)
            total_taeglich = get_score_berichtshet(current_taeglich, 30)

            total_ziel = total_wissen_anwenden + total_etwas_gelernt + total_Kommunikation + total_eigeninitiative + total_motivation
            total_berichtshet = total_puenktlich + total_taeglich

            total_score = get_score_total(total_ziel, total_berichtshet)

            print(total_score)
