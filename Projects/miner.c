#include <stdio.h>
#include <stdlib.h>
/*zohiogch Hishege

Beta version 1.0.0

2024-1-17*/
int main()
{

    int mineNumber = 5;
    int talbaiHemjeeY = 10;
    int talbaiHemjeeX = 10;

    printf("X-10 Y-10 Mine:5 shirheg baina oloroi\n Tanid 3 bolomj baiga!");
    for (int i = 0; i < talbaiHemjeeX; i++)
    {
        printf("\n");
        for (int j = 0; j < talbaiHemjeeY; j++)
        {
            printf("#");
        }
    }

    int mineX[mineNumber];
    int mineY[mineNumber];

    for (int k = 0; k < mineNumber; k++)
    {
        mineX[k] = rand() % (10 - 1) + 1;
        // printf("mineX:%d",mineX[k]);

        mineY[k] = rand() % (10 - 1) + 1;
        // printf("mineY:%d",mineY[k]);
    }
    printf("\n");

    int bolomj = 4;
    int inputX[bolomj];
    int inputY[bolomj];
    for (int h = 1; h <= bolomj; h++)
    {
        printf("%d-r bolomj", h);
        printf("X-hemjeeg ogooroi \n bolomj:%d" , h);
        scanf("%d", &inputX[h]);
        printf("Y-hemjeeg ogooroi \n bolomj:%d", h);
        scanf("%d", &inputY[h]);
        for (int g = 0; g < mineNumber; g++)
        {
            if (mineX[g] == inputX[h] + 1 && mineY[g] == inputY[h] + 1)
            {
                printf("You won !!!");
                return 0;
            }
        }
        printf("hudlaa");
    }
    printf("tanii %d bolomj duusaj hojigdlo ", bolomj);
    return 0;
}