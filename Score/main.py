import json
import os

input_dir = os.listdir("input")


def get_score_ziel(current_specific_score, gewicht):  # current_specific_score: all scores you can receive for "Ziel"
    current_score = current_specific_score * gewicht
    return current_score


def get_score_berichtshet(taeglich_oder_puenktlich, score):
    if taeglich_oder_puenktlich == "ja":
        return score
    else:
        return 0


def get_score_total(total_ziel, total_berichtshet):
    score = total_ziel + total_berichtshet
    return score


for file_name in input_dir:  # Execute this for all files in the input folder
    with open('input/' + file_name, 'r') as json_file:
        file_content = json.load(json_file)   # load read the data from that object, and use that string to create an
        # object

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

            # Calculate the score for "Ziel":
            total_wissen_anwenden = get_score_ziel(current_wissen_anwenden, 2)  # the second number is the weight
            total_etwas_gelernt = get_score_ziel(current_etwas_gelernt, 1)
            total_Kommunikation = get_score_ziel(current_Kommunikation, 2)
            total_eigeninitiative = get_score_ziel(current_eigeninitiative, 2)
            total_motivation = get_score_ziel(current_motivation, 1)

            # Berichtsheft - the second parameter is the amount of points
            total_puenktlich = get_score_berichtshet(current_puenktlich, 50)
            total_taeglich = get_score_berichtshet(current_taeglich, 30)

            total_ziel = total_wissen_anwenden + total_etwas_gelernt + total_Kommunikation + total_eigeninitiative + \
                         total_motivation
            total_berichtsheft = total_puenktlich + total_taeglich

            total_score = get_score_total(total_ziel, total_berichtsheft)

            # Debugg:
            # print(current_wissen_anwenden, total_wissen_anwenden)
            # print(current_etwas_gelernt,total_etwas_gelernt)
            # print( current_Kommunikation, total_Kommunikation)
            # print(current_eigeninitiative, total_eigeninitiative)
            # print(current_motivation, total_motivation)

            print(f"Score Berichtsheft: {total_berichtsheft}, Score Ziel: {total_ziel} , Total Score: {total_score}")
