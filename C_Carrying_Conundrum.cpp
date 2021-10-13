#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL);

void Solve(){
    string str,str1,str2;
    cin>>str;
    for (int i=0;i<str.size();i++){
        if (i%2==0)
        str1+=str[i];
        else 
        str2+=str[i];
    }
    if (str2.size()==0)
    cout<<stoi(str)-1<<endl;
    else 
    cout<<(stoi(str1)+1)*(stoi(str2)+1)-2<<endl;
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