import mysql.connector
import hashlib
class Anmeldung:
	def anmeldung(username, pw):
		db = mysql.connector.connect(
			host = "localhost",
			user = "ausbiscore",
			passwortd = "pi",
			database = "AusbiScore"
		)
		
		cursor = db.cursor()
		cursor.execute(
			"SELECT * FROM anmeldung WHERE UserName='" +
			username +
			"' AND Passwort='" +
			hashlib.sha512(pw.encode(encoding="utf-8")).hexdigest() +
			"';"
		)
	
		res = cursor.fetchall()
		
		if len(res) == 1:
			print("Anmeldung erfolgreich")
			return true
		else:
			print("Anmeldung fehlgeschlagen")
			return false