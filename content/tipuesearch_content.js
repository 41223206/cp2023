var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n  \n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n  \n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_cos_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot cos(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n  \n    return 0;\n} \n clear \n cd downloads \n cc gnuplot_ex1.c \n ./a.out \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// cc roc_flag.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n    // red rectangle area\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // blue rectangle area\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 目前僅畫出青天白日的輪廓直線, 請嘗試計算所需的點座標完成國旗繪圖\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    float angle = 0;\n    int fromX, fromY;\n    int toX, toY;\n    for (int i=0; i<24; i++){\n        angle += 5*M_PI*2/12;\n        //printf("%.3f", angle);\n        toX = center_x + cos(angle)*sun_radius;\n        toY = center_y + sin(angle)*sun_radius;\n        // 只有 i 為 0 時移動到 toX, toY, 其餘都進行直線繪圖\n        if (i!=0){\n            gdImageLine(img, fromX, fromY, toX, toY, color);\n        }\n        fromX = toX;\n        fromY = toY;\n   }\n} \n \n // https://en.wikipedia.org/wiki/Flag_of_the_United_States\n// https://www.britannica.com/topic/flag-of-the-United-States-of-America\n// 以下為幾乎要繪製完成的美國國旗, 請修改下列原始碼, 令其繪出正確的美國國旗\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 178, 34, 52); // Red stripes\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 60, 59, 110); // Blue field\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // Corrected star size (half the original size)\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.063 * height); // Horizontal spacing between stars\n    int star_spacing_y = (int)(0.054 * height); // Vertical spacing between stars\n    int star_start_x = (int)(0.0616 * height); // Starting X position for stars\n    int star_start_y = (int)(0.0485 * height); // Starting Y position for stars\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x;\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // Fill the star with white color\n    gdImageFilledPolygon(img, points, 10, color);\n}\n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red );\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = 2 * width / 3;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white ;\n    int center_x =  0.5 * width;\n    int center_y =  0.5 * height;\n    int sun_radius = 145 ;\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n\n\n    // 繪製白色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 3, sun_radius * 3, red);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_chinese_flag(gdImagePtr img);\n \nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n \n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n \n    draw_chinese_flag(im);\n \n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n \n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n \n    return 0;\n}\n \n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n \nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n \n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n \n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n \n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n \n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n \n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n \n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n \n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n \n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n \n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n \nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n \n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    // 绘制英国国旗\n    draw_uk_flag(img);\n \n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \n \n \nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n \n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n \n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n \n \n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n \n    int x1, y1, x2, y2, x3, y3;\n \n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n \n \n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n \n  int x1, y1, x2, y2, x3, y3;\n \n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n \n \n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  }\n \n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n \n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n \n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n#define WIDTH 900\n#define HEIGHT 600\n#define FILENAME "south_korea_flag.png"\n\nint main() {\n    gdImagePtr im;\n    FILE *pngout;\n    int white, black, red, blue;\n\n    im = gdImageCreate(WIDTH, HEIGHT);\n\n    white = gdImageColorAllocate(im, 255, 255, 255);\n    black = gdImageColorAllocate(im, 0, 0, 0);\n    red = gdImageColorAllocate(im, 205, 0, 0);\n    blue = gdImageColorAllocate(im, 0, 56, 168);\n\n    // Background (white)\n    gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT , white);\n\n    // Blue Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 210, 30, red, gdArc);\n\n    // Red Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 30, 210, blue, gdArc);\n\n  int circleX = 385;    // 圓心的 X 座標\n  int circleY = 262.5;   // 圓心的 Y 座標\n  int circleRadius = 75;     \n\n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX, circleY, circleRadius * 2, circleRadius * 2, red);\n\n  int circleX2 = 515;    // 圓心的 X 座標\n\n int circleY2 = 337.5;\n\n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX2, circleY2, circleRadius * 2, circleRadius * 2, blue);\n\n  {\n\n\n  // 起點和終點位置\n\n  int startX = 340;    \n  // 線的起點 X 座標\n\n  int startY = 90;   \n  // 線的起點 Y 座標\n\n  int endX = 200;     \n  // 線的終點 X 座標\n\n  int endY = 260;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY -10, endX -35, endY -10, black);\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY -20, endX -70, endY -20, black);\n\n  int startX2 = 213;    \n  // 線的起點 X 座標\n\n  int startY2 = 270;   \n  // 線的起點 Y 座標\n\n  int endX2 = 133;     \n  // 線的終點 X 座標\n\n  int endY2 = 210;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX2 +3, startY2, endX2 +3, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -17, startY2 +9 , endX2 -17, endY2 +9 , white);\n\n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +115, startY2 -145, endX2 +115, endY2 -145, white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 -155, endX2 +120, endY2 -155, white);\n\n  gdImageSetThickness(im, lineWidth +12);\ngdImageLine(im, startX2 +145, startY2 -155, endX2 +145, endY2 -155, white);\n}\n  {\n    // 起點和終點位置\n\n  int startX = 330;    \n  // 線的起點 X 座標\n\n  int startY = 520;   \n  // 線的起點 Y 座標\n\n  int endX = 190;     \n  // 線的終點 X 座標\n\n  int endY = 350;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n\n  int startX2 = 213;    \n  // 線的起點 X 座標\n\n  int startY2 = 330;   \n  // 線的起點 Y 座標\n\n  int endX2 = 133;     \n  // 線的終點 X 座標\n\n  int endY2 = 390;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n\n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n\n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n\n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n\n  }\n\n  {\n    // 起點和終點位置\n\n  int startX = 564;    \n  // 線的起點 X 座標\n\n  int startY = 520;   \n  // 線的起點 Y 座標\n\n  int endX = 704;     \n  // 線的終點 X 座標\n\n  int endY = 350;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY +20, endX +70, endY +20, black);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY +10, endX +35, endY +10, black);\n\ngdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 400, 734, 490, white);\n\n  int startX2 = 553;    \n  // 線的起點 X 座標\n\n  int startY2 = 330;   \n  // 線的起點 Y 座標\n\n  int endX2 = 633;     \n  // 線的終點 X 座標\n\n  int endY2 = 390;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +139, startY2, endX2 +139, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 -9 , endX2 +157, endY2 -9 , white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 +155, endX2 +25, endY2 +155, white);\n\n  gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -3, startY2 +170, endX2 , endY2 +170, white);\n  }\n  {\n    // 起點和終點位置\n\n  int startX = 330;    \n  // 線的起點 X 座標\n\n  int startY = 520;   \n  // 線的起點 Y 座標\n\n  int endX = 190;     \n  // 線的終點 X 座標\n\n  int endY = 350;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n\n  int startX2 = 213;    \n  // 線的起點 X 座標\n\n  int startY2 = 330;   \n  // 線的起點 Y 座標\n\n  int endX2 = 133;     \n  // 線的終點 X 座標\n\n  int endY2 = 390;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n\n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n\n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n\n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n\n  }\n  {\n    // 起點和終點位置\n\n  int startX = 564;    \n  // 線的起點 X 座標\n\n  int startY = 97;   \n  // 線的起點 Y 座標\n\n  int endX = 704;     \n  // 線的終點 X 座標\n\n  int endY = 267;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY -20, endX +70, endY -20, black);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n\n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 212, 734, 118, white);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY -10, endX +35, endY -10, black);\n\n  int startX2 = 553;    \n  // 線的起點 X 座標\n\n  int startY2 = 277;   \n  // 線的起點 Y 座標\n\n  int endX2 = 633;     \n  // 線的終點 X 座標\n\n  int endY2 = 217;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +134, startY2, endX2 +134, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 +9 , endX2 +157, endY2 +9 , white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 -155, endX2 +25, endY2 -155, white);\n\n    gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -5, startY2 -155, endX2 -5, endY2 -155, white);\n\n  }\n\n    // Save image\nFILE *outputFile = fopen("./../images/korea_flag.png", "wb");\nif (outputFile == NULL) {\n    fprintf(stderr, "Error opening the output file.\\n");\n    return 1;\n}\n  gdImagePngEx(im, outputFile, 9);\n      fclose(outputFile);\n      gdImageDestroy(im);\n      return 0;\n  } \n \n \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'ANSIC', 'text': '#include <stdio.h>\nint main()  \n{\n    // 印出名字\n    printf("Name   : Alexandra Abramov\\n"); \n    // 印出生日\n    printf("DOB    : July 14, 1975\\n"); \n    // 印出手機號碼\n    printf("Mobile : 99-9999999999\\n"); \n    // 表示程式執行成功\n    return(0); \n}\n \n \n #include <stdio.h>\nint main(int argc, char** argv) {\n    // 檢查C標準版本\n    #if __STDC_VERSION__ >=  201710L\n        printf("我們正在使用C18標準！\\n");\n    #elif __STDC_VERSION__ >= 201112L\n        printf("我們正在使用C11標準！\\n");\n    #elif __STDC_VERSION__ >= 199901L\n        printf("我們正在使用C99標準！\\n");\n    #else\n        printf("我們正在使用C89/C90標準！\\n");\n    #endif\n    // 表示程式執行成功\n    return 0;\n}\n \n \n #include <stdio.h>\nint main() \n{\n    // 打印一行井號\n    printf("######\\n");\n    // 打印一個單獨的井號\n    printf("#\\n");\n    // 打印一行井號\n    printf("#####\\n");\n    // 打印一個單獨的井號\n    printf("#\\n");\n    \n    // 打印一個單獨的井號\n    printf("#\\n");\n    \n    // 打印一個單獨的井號\n    printf("#\\n");\n    return(0);\n} \n \n #include <stdio.h>\nint main() \n{\n    // 宣告並初始化字符變數\n    char char1 = \'X\';\n    char char2 = \'M\';\n    char char3 = \'L\';\n    // 印出原始順序和反轉順序的字符\n    printf("The reverse of %c%c%c is %c%c%c\\n",\n        char1, char2, char3,\n        char3, char2, char1);\n    return(0);\n}\nThe reverse of XML is LMX\n \n \n #include <stdio.h>\n/* \n   用於存儲矩形寬度和高度的變數（以英寸為單位）\n*/\nint width;          \nint height;         \nint area;           /* 用於存儲矩形的面積的變數 */\nint perimeter;      /* 用於存儲矩形的周長的變數 */\nint main() {\n    /* 賦值給高度和寬度 */\n    height = 7;\n    width = 5;\n    /* 計算矩形的周長 */\n    perimeter = 2 * (height + width);\n    printf("矩形的周長 = %d 英寸\\n", perimeter);\n    /* 計算矩形的面積 */\n    area = height * width;\n    printf("矩形的面積 = %d 平方英寸\\n", area);\n    return(0);\n} \n \n #include <stdio.h>\nint main()\n{\n    int a = 125, b = 12345;        /* 宣告並初始化整數變數 */\n    long ax = 1234567890;          /* 宣告並初始化長整數變數 */\n    short s = 4043;                /* 宣告並初始化短整數變數 */\n    float x = 2.13459;             /* 宣告並初始化浮點數變數 */\n    double dx = 1.1415927;         /* 宣告並初始化雙精度浮點數變數 */\n    char c = \'W\';                  /* 宣告並初始化字符變數 */\n    unsigned long ux = 2541567890; /* 宣告並初始化無符號長整數變數 */\n\n    /* 不同資料型態之間的算術操作和型別轉換 */\n    printf("a + c =  %d\\n", a + c);\n    printf("x + c = %f\\n", x + c);\n    printf("dx + x = %f\\n", dx + x);\n    printf("((int) dx) + ax =  %ld\\n", ((int) dx) + ax);\n    printf("a + x = %f\\n", a + x);\n    printf("s + b =  %d\\n", s + b);\n    printf("ax + b = %ld\\n", ax + b);\n    printf("s + c =  %hd\\n", s + c);\n    printf("ax + c = %ld\\n", ax + c);\n    printf("ax + ux = %lu\\n", ax + ux);\n\n    return 0;\n}\n\n \n \n #include <stdio.h>\nint main()\n{\n    int a = 125, b = 12345;        /* 宣告並初始化整數變數 */\n    long ax = 1234567890;          /* 宣告並初始化長整數變數 */\n    short s = 4043;                /* 宣告並初始化短整數變數 */\n    float x = 2.13459;             /* 宣告並初始化浮點數變數 */\n    double dx = 1.1415927;         /* 宣告並初始化雙精度浮點數變數 */\n    char c = \'W\';                  /* 宣告並初始化字符變數 */\n    unsigned long ux = 2541567890; /* 宣告並初始化無符號長整數變數 */\n\n    /* 不同資料型態之間的算術操作和型別轉換 */\n    printf("a + c =  %d\\n", a + c);\n    printf("x + c = %f\\n", x + c);\n    printf("dx + x = %f\\n", dx + x);\n    printf("((int) dx) + ax =  %ld\\n", ((int) dx) + ax);\n    printf("a + x = %f\\n", a + x);\n    printf("s + b =  %d\\n", s + b);\n    printf("ax + b = %ld\\n", ax + b);\n    printf("s + c =  %hd\\n", s + c);\n    printf("ax + c = %ld\\n", ax + c);\n    printf("ax + ux = %lu\\n", ax + ux);\n\n    return 0;\n} \n \n #include <stdio.h>\nint main()\n{\n    int days, years, weeks;\n\n    days = 1329; // 總天數\n\n    // 將天數轉換成年、週和剩餘的天數\n    years = days / 365; // 計算年數\n    weeks = (days % 365) / 7; // 計算週數\n    days = days - ((years * 365) + (weeks * 7)); // 計算剩餘的天數\n\n    // 印出結果\n    printf("年數: %d\\n", years);\n    printf("週數: %d\\n", weeks);\n    printf("天數: %d \\n", days);\n\n    return 0;\n} \n \n #include <stdio.h>\nint main() \n{\n    int x, y, sum; // 宣告兩個整數和它們的總和的變數\n    \n    // 提示使用者輸入並將結果存儲在 \'x\' 中\n    printf("\\n輸入第一個整數: "); \n    scanf("%d", &x);\n    \n    // 提示使用者輸入並將結果存儲在 \'y\' 中\n    printf("\\n輸入第二個整數: ");\n    scanf("%d", &y);\n    \n    sum = x + y; // 計算 \'x\' 和 \'y\' 的總和\n    \n    // 印出總和\n    printf("\\n上述兩個整數的總和 = %d\\n", sum);\n    \n    return 0; // 表示成功執行\n} \n \n #include <stdio.h>\nint main() \n{\n    int x, y, result; // 宣告兩個整數和它們的乘積的變數\n    \n    // 提示使用者輸入並將結果存儲在 \'x\' 中\n    printf("\\n輸入第一個整數: "); \n    scanf("%d", &x);\n    \n    // 提示使用者輸入並將結果存儲在 \'y\' 中\n    printf("\\n輸入第二個整數: ");\n    scanf("%d", &y);\n    \n    result = x * y; // 計算 \'x\' 和 \'y\' 的乘積\n    \n    // 印出乘積\n    printf("上述兩個整數的乘積 = %d\\n", result);\n}\n\n \n \n \n', 'tags': '', 'url': 'ANSIC.html'}, {'title': 'W12', 'text': '  #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("hellogd.png", "wb");\n    if (outputFile == NULL) {\n\nfprintf(stderr, "Error opening the output file.\\n");\n\nreturn 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    // 長方形塗色\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n    // 橢圓形塗色\n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n    // 橢圓形畫線\n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n    // 畫直線\n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n\n    // 多邊形畫線\n    gdPoint points[4];\n    points[0].x = (int)width/4;\n    points[0].y = (int)height*3/4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n    gdImagePolygon(img, points, 4, black);\n\n    // 多邊形塗色\n    gdPoint points2[4];\n    points2[0].x = (int)width/3;\n    points2[0].y = (int)height/2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n} \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '// 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n\n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // Close the data file\n    fclose(outputFile);\n\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': 'c_ex', 'text': '#include <stdio.h>\nvoid main()\n{\nfloat a = 0.5;\ndouble b = 1.2;\nint c = 3;\nb = b + a + c;\n/* 輸出 a, b, c 到螢幕 */\nprintf( " a = %3.1f, b = %3.1f, c = %d ", a ,b, c );\n} \n \n #include <stdio.h>\nint main()\n{\nint a = 64;\nint b = 0x40;\nlong c = 64L;\nprintf("%d,%d,%d", a, b, c );\nreturn 0;\n} \n \n #include <stdio.h>\nint main()\n{\nint i;\nprintf("Input an integer:");\nscanf( "%d", &i ); /* ch 前面加個 &(位址運算元) */\nprintf( "the number is %d", i );\nreturn 0;\n} \n \n #include<stdio.h>\nint main()\n{\nint a,b;\na = 10; b = 3;\nprintf( "%d \\n", a * b );\nprintf( "%d \\n", a / b );\nprintf( "%d \\n", a + b );\nprintf( "%d \\n", a - b );\nprintf( "%d \\n", a % b );\nreturn 0;\n}\n \n \n #include <stdio.h>\nint main()\n{\nint a = 10, b = 5;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nprintf( "\\n" );\nb = 10;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nreturn 0;\n} \n \n #include<stdio.h>\nvoid main()\n{\nint a,b;\na = 15;\nb = 1;\nprintf("%d \\n", a | b ); /* a OR b */\nprintf("%d \\n", a & b ); /* a AND b */\nprintf("%d \\n", a ^ b ); /* a XOR b */\nprintf("%d \\n", a << 1 ); /* a 位元左移 1 位 */\nprintf("%d \\n", a >> 1 ); /* a 位元右移一位 */\nprintf("%d \\n", ~a ); /* A 的補數運算 */\n} \n \n #include <stdio.h>\nvoid main()\n{\nint a;\na = 3;\nprintf("%d\\n", !a );\na = 0;\nprintf("%d\\n", !a );\n}\n \n \n #include <stdio.h>\nvoid main()\n{\nprintf("%d\\n", 1 && 3 );\nprintf("%d\\n", 0 && 0 );\nprintf("%d\\n", 2 && 2 );\n}\n \n \n #include <stdio.h>\nvoid main()\n{\nprintf("%d\\n", 1 || 0 );\nprintf("%d\\n", 0 || 0 );\nprintf("%d\\n", 2 || 2 );\n} \n \n  #include <stdio.h>\nvoid main()\n{\nchar a;\nprintf( " The size of int is %d \\n", sizeof(int) );\nprintf( " The size of char a is %d \\n", sizeof(a) );\n}\n \n \n #include <stdio.h>\nvoid main()\n{\nchar c;\nprintf( "Input a char:" );\nscanf( "%c", &c );\nswitch( c )\n{\ncase \'a\':\nprintf(" you pressed a ");\nbreak;\ncase \'b\':\nprintf(" you pressed b ");\nbreak;\ncase \'c\':\nprintf(" you pressed c ");\nbreak;\ndefault:\nprintf(" not a, b, c ");\nbreak;\n}\n} \n \n #include <stdio.h>\nvoid main()\n{\nchar c;\nprintf( "Input a char:" );\nscanf( "%c", &c );\nswitch( c )\n{\ncase \'a\':\nprintf(" you pressed a ");\nbreak;\ncase \'b\':\nprintf(" you pressed b ");\nbreak;\ncase \'c\':\nprintf(" you pressed c ");\nbreak;\n}\n}\n \n \n #include <stdio.h>\nvoid main()\n{\nint i, j;\nfor ( i = 0, j = 10; i < 6; i++, j++ )\n{\nprintf( "i = %d, ", i );\nprintf( "j = %d \\n", j );\n}\n}\n \n \n #include <stdio.h>\nvoid main()\n{\nint i, j;\ni = 0; j = 10; /* 迴圈外先設定初值 */\nwhile( i < 6 )\n{\nprintf( "i = %d, ", i );\nprintf( "j = %d \\n", j );\ni++;\nj++;\n}\n}\n \n \n #include <stdio.h>\nint main()\n{\nint grade[5]; /* size = 5 的 array */\nint i;\ngrade[0] = 75; /* 1st element */\ngrade[1] = 80; /* 2nd element */\ngrade[2] = 85; /* 3rd element */\ngrade[3] = 70; /* 4th element */\ngrade[4] = 90; /* 5th element */\nfor( i = 0; i < 5; i ++ )\n{\nprintf("Number %d = %d\\n", i, grade[ i ] );\n}\nreturn 0;\n}\n \n \n #include <stdio.h>\nvoid main()\n{\nchar *str = "Eric";\nprintf( "%c", *(str+0) ); /* 也可寫 printf(“%c”,str[0] ); */\nprintf( "%c", *(str+1) ); /* 也可寫 printf(“%c”,str[1] ); */\nprintf( "%c", *(str+2) ); /* 也可寫 printf(“%c”,str[2] ); */\nprintf( "%c", *(str+3) ); /* 也可寫 printf(“%c”,str[3] ); */\n}\n \n \n #include <stdio.h>\nint main()\n{\n/* 印出 Hello World! Bye Bye */\nprintf("Hello World! ");\nprintf("Bye ");\nprintf("Bye");\nreturn 0;\n}\n \n \n int main()\n{\n/* 變數宣告 */\nint a;\nint A;\nint b, c;\na = 1;\nA = 8;\nb = 2;\nc = A - a + b; /* 先計算 A - a + b, 將結果傳會給 c */\nprintf( "%d", c ); /* 以 printf 印出 c 這個整數型態的變數 */\nreturn 0;\n}\n \n \n \n int main()\n{\nint a = 1;\nint A = 8;\nint b = 2, c;\nc = A - a + b;\n/* 輸出 a, A, b, c 到螢幕 */\nprintf( "a = %d, A = %d, b = %d, c = %d ", a, A, b, c );\nreturn 0;\n} \n \n #include <stdio.h>\nint main()\n{\nchar x, y;\nx = \'a\';\ny = (char)97;\n/* 輸出 x, y, x, 最後一個是以 ASCII 值顯示 y */\nprintf( " x = %c, y = %c, ASCII of y = %d", x, y, y );\nreturn 0;\n}\n \n \n', 'tags': '', 'url': 'c_ex.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};