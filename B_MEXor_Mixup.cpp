#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL);

void Solve(){
    ll a,b,x=0;
    cin>>a>>b;
    int pXor;
    if (a % 4 == 1) {pXor = a - 1;}
    else if (a % 4 == 2) {pXor = 1;}
    else if (a % 4 == 3) {pXor = a;}
    else {pXor = 0;}
 
    if (pXor == b) {cout << a << '\n';}
    else if ((pXor ^ b) != a) {cout << a + 1 << '\n';}
    else {cout << a + 2 << '\n';}
}

int main(){
    fastio
    ll t;
    cin>>t;
    while(t--){
        Solve();
    }
return 0;
}