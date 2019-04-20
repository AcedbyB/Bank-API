using System;
using System.Collections.Generic;
namespace WordPlay
{
    public abstract class ILogger
    {
        public virtual void Log(string[] args, List<String> palin, List<String> notpalin, Boolean flag) {

        }

    }
}