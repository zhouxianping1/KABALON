import { NextRequest, NextResponse } from "next/server";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/24754932/uf2pgw5/";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证必需字段
    if (!body.company || !body.contact || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 准备发送到 Zapier 的数据（使用越南标准时间 GMT+7）
    const now = new Date();
    
    // 转换为越南时区 (Asia/Ho_Chi_Minh, GMT+7)
    // 使用更可靠的方法格式化时间
    const vietnamTime = new Date(now.toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh"
    }));
    
    // 获取越南时区的各个时间部分
    const year = vietnamTime.getFullYear();
    const month = String(vietnamTime.getMonth() + 1).padStart(2, '0');
    const day = String(vietnamTime.getDate()).padStart(2, '0');
    const hours = String(vietnamTime.getHours()).padStart(2, '0');
    const minutes = String(vietnamTime.getMinutes()).padStart(2, '0');
    const seconds = String(vietnamTime.getSeconds()).padStart(2, '0');
    
    // 格式: 2025-12-06 14:30:45 (越南标准时间 GMT+7)
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    const zapierData = {
      // 使用格式化后的时间字符串（Google Sheets 可以直接识别）
      "提交时间": formattedDateTime, // 使用中文列名，确保映射正确
      timestamp: formattedDateTime, // 备用字段名
      datetime: formattedDateTime, // 另一个备用字段名
      company: body.company,
      contact: body.contact,
      email: body.email,
      phone: body.phone,
      product: body.product || "",
      message: body.message,
    };

    // 调试日志（仅在开发环境）
    if (process.env.NODE_ENV === "development") {
      console.log("Sending to Zapier:", JSON.stringify(zapierData, null, 2));
    }

    // 发送数据到 Zapier Webhook
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zapierData),
    });

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    } else {
      const errorText = await response.text();
      console.error("Zapier webhook error:", errorText);
      return NextResponse.json(
        { error: "Failed to submit form" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

