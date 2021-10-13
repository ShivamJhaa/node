public class ques4 {
    public static void main(String[] args) {
        //Intialising a 2-D array

        String[][] array = { {"you", "are", "good" }, { "I", "am", "not"},{"so","good"} };
        //Row Size
        System.out.println("Rows of array:" + array.length); 

        for(int i=0;i<array.length;i++)
            //Each column size
            System.out.println("Colums size of Sub-array(" + (i+1) +"):" + array[i].length);
        }
}
