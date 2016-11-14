package na.gostop;


import android.samsung.wrtwidgets.activity.BaseActivity;
import android.os.Bundle;

public class MainActivity extends BaseActivity
{
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
		super.launchWidget();
        
    }
}
