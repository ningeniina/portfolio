import mail from "@sendgrid/mail";
import { NextResponse } from "next/server";

mail.setApiKey(process.env.SEND_API_KEY || "");

export async function POST(request: Request) {
  let status;
  const body = await request.json();
  const data = {
    to: body.email,
    from: {
      email: body.email,
      name: body.name,
    },
    subject: "お問い合わせ完了(自動送信メール)",
    text:
      "※このメールは自動返信メールとなっております。\n※問い合わせフォームに入力されたメールを送信元に設定しています\n\n" +
      "■お問い合わせ内容\n" +
      body.message,
    html:
      "<p>※このメールは自動返信メールとなっております。<br>※問い合わせフォームに入力されたメールを送信元に設定しています<br><br>■お問い合わせ内容<br>" +
      body.message +
      "</p>",
  };
  const adminMsg = {
    to: body.email,
    from: body.email,
    subject: "お問合わせ確認メール",
    text:
      "お問い合わせがありました！\n※問い合わせフォームに入力されたメールに送信されています\n\n" +
      "■お問い合わせ内容\n" +
      body.message,
    html:
      "<p>お問い合わせがありました！<br>※問い合わせフォームに入力されたメールに送信されています<br><br>■お問い合わせ内容<br>" +
      body.message +
      "</p>",
  };

  await mail.send(adminMsg);
  await mail
    .send(data)
    .then(() => {
      status = 200;
    })
    .catch((error) => {
      status = 500;
    });
  return NextResponse.json({ message: "Success" }, { status: status });
}
