import java.util.Scanner;
public class ques3 {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter Number For Checking whether it is Armstrong or not: ");
        int N=input.nextInt();

        
        int A=0,temp=0,X=N;
        //Extracting each digit from given no and adding their cubes to temporary variable
        while(X!=0){
           temp=X%10;
           A+=temp*temp*temp;
           X=X/10;
        }
        if(A==N)
        {
            System.out.println("Yes,it is an Armstrong Number");
        }
        else 
        {
            System.out.println("No, it is not an Armstrong Number");
        }
        input.close();
        }
}
