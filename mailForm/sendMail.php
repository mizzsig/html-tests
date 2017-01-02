<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="mailStyle.css">
	</head>

	<body>
		<div class="mailform">
			<div class="title">メールフォーム</div>
			
			<?php 
				$mail = "[名前]\n".$_POST['name']."\n\n[メールアドレス]\n".$_POST['email']."\n\n[件名]\n".$_POST['about']."\n\n[本文]\n".$_POST['main'];

				if(mb_send_mail("送信先メールアドレス", "件名", $mail, "送信元メールアドレス")){
					echo "送信成功！！！";
				}else{
					echo "送信失敗……";
				}
			?>

			<br>
			<input type="button" value="戻る" onClick="location.href='mailForm.html'">
		</div>
	</body>
</html>