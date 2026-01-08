#include <stdio.h>

int main()
{
    int n = 0;
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        int k = 2 * i;

        for (int j = 0; j < k-1; j++) {
            printf("%d", k);
        }
    }

    return 0;
}
